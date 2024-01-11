
import app from "./app.js"

import {PORT} from "./config.js"

// RUN SERVER
app.listen(PORT)

// STATUS SERVER PORT
console.log("server running on port:", PORT)