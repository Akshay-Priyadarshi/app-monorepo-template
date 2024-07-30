import { Request, Response, NextFunction, Router } from "express"
import { ApiResponse } from "@/models/response.model"
import { TodoService } from "@/services/todo.service"
import { BadRequestError } from "@/models/error.model"
import { Todo } from "@/models/todo.model"

export class TodoController {
    constructor(private service: TodoService) {}

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = this.service.create(req.body)
            const apiResponse = new ApiResponse({
                message: "Todo created successfully",
                data
            })
            res.status(apiResponse.statusCode).json(apiResponse)
        } catch (error) {
            next(error)
        }
    }

    async read(req: Request, res: Response, next: NextFunction) {
        try {
            const data = this.service.read(req.params.id)
            const apiResponse = new ApiResponse({
                message: "Todo read successfully",
                data
            })
            res.status(apiResponse.statusCode).json(apiResponse)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const todo = this.service.read(req.params.id)
            if (!todo) {
                throw new BadRequestError("Todo not found")
            }
            const data = this.service.update(todo as Todo, req.body)
            const apiResponse = new ApiResponse({
                message: "Todo updated successfully",
                data
            })
            res.status(apiResponse.statusCode).json(apiResponse)
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const todo = this.service.read(req.params.id)
            if (!todo) {
                throw new BadRequestError("Todo not found")
            }
            const data = this.service.delete(todo as Todo)
            const apiResponse = new ApiResponse({
                message: "Todo deleted successfully",
                data
            })
            res.status(apiResponse.statusCode).json(apiResponse)
        } catch (error) {
            next(error)
        }
    }
}
