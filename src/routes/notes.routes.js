import { Router } from "express"
import { getNotes, postNotes , patchNotes, getNote, deleteNote } from "../controllers/notes.controller.js"




const router = Router()

router.get("/notes", getNotes)

// function return only 1 item with ID
router.get("/notes/:id", getNote)


router.post("/notes", postNotes )

router.patch("/notes/:id", patchNotes)

//delete 1 row from id
router.delete("/notes/:id", deleteNote)


export default router