import uuid from "uuid"

export enum TodoStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed"
}

export interface ITodoCreateDto {
    title: string
    description: string
}

export interface ITodoUpdateDto {
    title: string
    description: string
    status: TodoStatus
}

export class Todo {
    id: string
    title: string
    description: string
    status: TodoStatus
    created_at: Date
    updated_at: Date

    constructor(todoCreateDto: ITodoCreateDto) {
        this.id = uuid.v4()
        this.title = todoCreateDto.title
        this.description = todoCreateDto.description
        this.status = TodoStatus.PENDING
        this.created_at = new Date()
        this.updated_at = new Date()
    }
}
