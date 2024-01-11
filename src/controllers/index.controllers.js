import {pool} from "../db.js"

export const getPing = async (req, res) => {
    try {

        res.json({ message: "Pong" });

    } catch (error) {
        console.error("Error on getPingFuction:", error);
        res.status(500).json({ error: "Server Error" });
    }
}


    // Operation FROM SQL
    // const result = await pool.query("SELECT 15 + 1 AS result")
