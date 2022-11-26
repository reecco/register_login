import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.CONNECTION

export default async function connectionDB() {
  await mongoose.connect(`${url}`)
}