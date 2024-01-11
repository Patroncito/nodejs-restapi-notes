import express from "express";
import notesRouter from "./routes/notes.routes.js"
import indexrouter from "./routes/index.routers.js"

const app = express()

app.use("/api",express.json())

app.use("/api", notesRouter)
app.use("/api",indexrouter)


app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not Found"
    })
})

export default app