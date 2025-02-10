import React from 'react';
import { StringIdentity, StringResolver } from '@digital-net/core';
import { Box, Button, Text, Table } from '@digital-net/react-digital-ui';
import { useCreate, useGet, useSchema, useDelete } from '@digital-net/react-digital-client';
import type { ViewModel } from '@/models';
import { useNavigate } from 'react-router-dom';
import { SchemaHelper } from '@digital-net/core/modules/Schema';

export default function ViewsPage() {
    const { schema, isLoading: isSchemaLoading } = useSchema('/view');
    const { entities, isQuerying, invalidateQuery } = useGet<ViewModel>('/view');
    const navigate = useNavigate();
    const { create } = useCreate<ViewModel>('/view', {
        onSuccess: async () => await invalidateQuery(),
    });

    const { delete: _delete } = useDelete('/view', {
        onSuccess: async () => await invalidateQuery(),
    });

    const isLoading = React.useMemo(() => isSchemaLoading || isQuerying, [isSchemaLoading, isQuerying]);

    const handleCreate = React.useCallback(() => {
        const payload = {};
        for (const s of schema) {
            const resolvedName = StringResolver.toCamelCase(s.name);
            const resolvedType = SchemaHelper.resolve(s.type);
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
        async (id: string | number) => !isLoading ? _delete(id) : void 0,
        [_delete, isLoading],
    );

    return (
        <Box gap={1} p={2}>
            <Box direction="row" align="center" gap={2}>
                <Text>Views Page</Text>
                <Button onClick={handleCreate}>Create</Button>
            </Box>
            {isLoading
                ? <Text>Loading...</Text>
                : (
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
