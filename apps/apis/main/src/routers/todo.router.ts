import { Request, Response, NextFunction, Router } from "express"
import { ApiResponse } from "@/models/response.model"
import { TodoService } from "@/services/todo.service"
import { TodoController } from "@/controllers/todo.controller"

export class TodoRouter {
    public router: Router

    constructor(private controller: TodoController) {
        this.router = Router()
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.post("/", this.controller.create.bind(this.controller))
        this.router.get("/:id?", this.controller.read.bind(this.controller))
        this.router.put("/:id?", this.controller.update.bind(this.controller))
        this.router.delete("/", this.controller.delete.bind(this.controller))
    }
}
