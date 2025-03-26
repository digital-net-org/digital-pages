import { StringIdentity, StringResolver } from '@digital-lib/core';
import { EntitySchemaHelper, type ViewModel } from '@digital-lib/dto';
import { useCreate, useDelete, useGet, useSchema } from '@digital-lib/react-digital-client';
import { Box, Button, Table, Text } from '@digital-lib/react-digital-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const url = `${PAGES_API_URL}/view`;

export default function ViewsPage() {
    const { schema, isLoading: isSchemaLoading } = useSchema(url);
    const { entities, isQuerying, invalidateQuery } = useGet<ViewModel>(url);
    const navigate = useNavigate();

    const { create } = useCreate<ViewModel>(url, {
        onSuccess: async () => await invalidateQuery(),
    });

    const { delete: _delete } = useDelete(url, {
        onSuccess: async () => await invalidateQuery(),
    });

    const isLoading = React.useMemo(() => isSchemaLoading || isQuerying, [isSchemaLoading, isQuerying]);

    const handleCreate = React.useCallback(() => {
        const payload = {};
        for (const s of schema) {
            const resolvedName = StringResolver.toCamelCase(s.name);
            const resolvedType = EntitySchemaHelper.resolve(s.type);
            if (s.isForeignKey || s.isIdentity || s.isReadOnly || !s.isRequired) {
                continue;
            }
            if (resolvedType === 'string') {
                payload[resolvedName] = StringIdentity.generate();
            }
            if (resolvedType === 'boolean') {
                payload[resolvedName] = false;
            }
            if (resolvedType === 'Date') {
                payload[resolvedName] = new Date().toISOString();
            }
        }
        create(payload);
    }, [create, schema]);

    const handleDelete = React.useCallback(
        async (id: string | number) => (!isLoading ? _delete(id) : void 0),
        [_delete, isLoading]
    );

    return (
        <Box gap={1} p={2}>
            <Box direction="row" align="center" gap={2}>
                <Text>Views Page</Text>
                <Button onClick={handleCreate}>Create</Button>
            </Box>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <Table
                    schema={schema}
                    entities={entities}
                    onDelete={handleDelete}
                    onEdit={id => navigate(`/views/${id}`)}
                />
            )}
        </Box>
    );
}
