import { Router } from "express"
import { RootController } from "@/controllers/root.controller"
import { TodoRouter } from "./todo.router"
import { RootService } from "@/services/root.service"
import { TodoController } from "@/controllers/todo.controller"
import { TodoService } from "@/services/todo.service"

export class RootRouter {
    public router: Router

    constructor(private controller = new RootController(new RootService())) {
        this.router = Router()
        this.initializeRoutes({
            "/todos": new TodoRouter(new TodoController(new TodoService()))
                .router
        })
    }

    initializeRoutes(routers: { [key: string]: Router }) {
        for (const key in routers) {
            this.router.use(key, routers[key] as Router)
        }
        this.router.get("/check", this.controller.check)
        this.router.get(
            "/greet/:name",
            this.controller.greet.bind(this.controller)
        )
    }
}
