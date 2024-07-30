import { NextFunction, Response, Request } from "express"
import { BadRequestError } from "@/models/error.model"
import { ApiResponse } from "../models/response.model"
import { appLogger } from "@/utils/logger.util"

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    appLogger.error(err)
    let apiResponse: ApiResponse | null = null
    if (err instanceof BadRequestError) {
        apiResponse = new ApiResponse({ message: err.message, statusCode: 400 })
    } else {
        apiResponse = new ApiResponse({
            message: "Internal server error!",
            statusCode: 500
        })
    }
    res.status(apiResponse.statusCode).json(apiResponse)
}
