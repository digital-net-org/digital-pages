export interface EntityBase<T extends string | number = any> {
    id: T;
    createdAt: Date;
    updatedAt: Date;
}
