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

    public static getNewest(entities: EntityBase[]): EntityBase | undefined {
        return entities.find(
            entity => entity.createdAt.getTime() === Math.max(...entities.map(e => e.createdAt.getTime())),
        );
    }

    public static getById(entities: EntityBase[], id: string | number | undefined): EntityBase | undefined {
        return entities.find(entity => String(entity.id) === String(id));
    }
}