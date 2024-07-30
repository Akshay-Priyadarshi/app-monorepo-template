import dotenv from "dotenv"
if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: ".env" })
}

const NODE_ENV = process.env.NODE_ENV || "production"
const PORT =
    (process.env.PORT ? Number.parseInt(process.env.PORT) : undefined) || 8080

export default { NODE_ENV, PORT }
