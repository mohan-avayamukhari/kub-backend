import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
  userName: String,
  password: String
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default mongoose.model("Auth", noteSchema)
