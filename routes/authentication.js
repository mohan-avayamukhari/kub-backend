import Auth from "../models/authModel.js"
import bcrypt from "bcrypt"
import express from "express"

const router = express.Router()

router.post("", async (request, response) => {
  const hashPsw = await bcrypt.hash(request.body.psw, 10)
  const user = new Auth({
    userName: request.body.user,
    password: hashPsw
  })
  await user.save().then(savedPerson => {
    response.status(201).json(savedPerson)
  })
});

export default router