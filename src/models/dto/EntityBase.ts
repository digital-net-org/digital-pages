export type Guid = `${string}-${string}-${string}-${string}-${string}`;

export interface EntityBase {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
