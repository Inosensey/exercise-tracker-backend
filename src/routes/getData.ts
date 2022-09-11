import express , { Request, Response } from "express";

const router = express.Router();

router.get('/', (req:Request, res:Response) => {
    res.send({Message:"This is a sample data"})
})

module.exports = router;