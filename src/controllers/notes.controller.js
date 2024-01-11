import { response } from "express"
import { pool } from "../db.js" 


// get all notes
export const getNotes = async (req,res) =>  {
  
    try {
        const [rows] = await pool.query("SELECT * FROM notes")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}

// get one note
export const getNote = async (req,res) =>  {
 
    try {
        const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: "note not found"
        })
        res.send(rows[0])
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

// insert new data in DB with post.
export const postNotes = async (req,res) => {
 
    try {
        const {name, taskText} = req.body
        const [rows] = await pool.query("INSERT INTO notes (name, tasktext) VALUES (?,?)", [name, taskText])
        res.send({
            id : rows.insertId,
            name,
            taskText,
        })
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })
    }
}


export const patchNotes = async (req,res) => {

    try {
        const {id} = req.params
        const {name, tasktext} = req.body
    
        const [result] = await pool.query("UPDATE notes SET name = IFNULL(?, name), tasktext = IFNULL(?,tasktext) WHERE id = ?", [name, tasktext, id])
        console.log(result)
    
            if (result.affectedRows === 0) return res.status(404).json({
                message: "Note not found"
            })
    
        const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id])
    
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })
    }



}

//Delete note by id
export const deleteNote = async(req, res) => {

    try {
        const [result] = await pool.query ("DELETE FROM notes WHERE id = ?",[req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: "Note not found"
    })

   console.log(result)
   res.sendStatus(202)
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })
    }
   
}



