export type Guid = `${string}-${string}-${string}-${string}-${string}`;

export interface EntityBase {
    id: Guid | number;
    createdAt: Date;
    updatedAt: Date;
}
