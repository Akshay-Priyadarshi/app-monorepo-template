export interface IApiResponseCreate {
    message: string
    statusCode?: number
    data?: any | null
    success?: boolean
}

export class ApiResponse {
    public message: string
    public statusCode: number
    public data: any | null
    public success: boolean
    constructor(apiResponse: IApiResponseCreate) {
        this.message = apiResponse.message
        this.statusCode = apiResponse.statusCode || 200
        this.data = apiResponse.data || null
        this.success = this.statusCode >= 200 && this.statusCode < 300
    }
}
