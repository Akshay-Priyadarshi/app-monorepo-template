import { Request, Response, NextFunction } from "express"
import { ApiResponse } from "@/models/response.model"
import { RootService } from "@/services/root.service"

export class RootController {
    constructor(private service: RootService) {}

    async check(req: Request, res: Response, next: NextFunction) {
        const apiResponse = new ApiResponse({
            message: "🚀 Application is up and running"
        })
        res.status(apiResponse.statusCode).json(apiResponse)
    }

    public greet(req: Request, res: Response, next: NextFunction) {
        const { name } = req.params
        const data = this.service.greet(name as string)
        const apiResponse = new ApiResponse({
            message: `Greeted successfully`,
            data
        })
        res.status(apiResponse.statusCode).json(apiResponse)
    }
}
