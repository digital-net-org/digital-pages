export interface EntityBase<T extends string | number = any> {
    id: T;
    createdAt: Date;
    updatedAt: Date;
}

export class EntityBaseHelper {
    public static build<T extends EntityBase>(entity: T): T {
        return {
            ...entity,
            createdAt: new Date(entity.createdAt),
            updatedAt: new Date(entity.updatedAt),
        };
    }

    public static getNewest<T extends EntityBase>(entities: T[]): T | undefined {
        return entities.find(
            entity => entity.createdAt.getTime() === Math.max(...entities.map(e => e.createdAt.getTime())),
        );
    }

    public static getById<T extends EntityBase>(
        entities: T[],
        id: string | number | undefined,
    ): T | undefined {
        return entities.find(entity => String(entity.id) === String(id));
    }
}