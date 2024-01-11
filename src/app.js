import express from "express";
import notesRouter from "./routes/notes.routes.js"
import indexrouter from "./routes/index.routers.js"
import cors from "cors"

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api",express.json())

app.use("/api", notesRouter)
app.use("/api",indexrouter)


app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not Found"
    })
})

export default app