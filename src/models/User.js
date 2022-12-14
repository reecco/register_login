import mongoose from "mongoose"

const { Schema } = mongoose

const UserSchema = new Schema({
  email: String,
  password: String 
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel