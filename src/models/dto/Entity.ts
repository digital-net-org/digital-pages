export interface Entity<TId extends string | number = any> {
    id: TId;
    createdAt: Date;
    updatedAt: Date;
}

export class EntityBaseHelper {
    public static build<T extends Entity>(entity: T): T {
        return {
            ...entity,
            createdAt: new Date(entity.createdAt),
            updatedAt: new Date(entity.updatedAt),
        };
    }

    public static getNewest<T extends Entity>(entities: T[]): T | undefined {
        return entities.find(
            entity => entity.createdAt.getTime() === Math.max(...entities.map(e => e.createdAt.getTime())),
        );
    }

    public static getById<T extends Entity>(
        entities: T[],
        id: string | number | undefined,
    ): T | undefined {
        return entities.find(entity => String(entity.id) === String(id));
    }
}