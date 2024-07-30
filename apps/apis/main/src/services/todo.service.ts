import { ITodoCreateDto, ITodoUpdateDto, Todo } from "@/models/todo.model"

export class TodoService {
    todos: Todo[]

    constructor() {
        this.todos = []
    }

    create(todoCreateDto: ITodoCreateDto): Todo {
        const todo = new Todo(todoCreateDto)
        this.todos.push(todo)
        return todo
    }

    read(todoId?: string): Todo[] | Todo | null {
        if (todoId) {
            return this.todos.find((todo) => todo.id === todoId) || null
        } else {
            return this.todos
        }
    }

    update(todo: Todo, todoUpdateDto: ITodoUpdateDto): Todo | null {
        todo.title = todoUpdateDto.title
        todo.description = todoUpdateDto.description
        todo.status = todoUpdateDto.status
        todo.updated_at = new Date()
        return todo
    }

    delete(todo: Todo): Todo {
        this.todos = this.todos.filter((todo) => todo.id !== todo.id)
        return todo
    }
}
