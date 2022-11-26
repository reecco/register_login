import express from 'express'
import dotenv from 'dotenv'

import routes from './src/routes/index.js'
import Loader from './src/db/index.js'

dotenv.config()

Loader.start()

const app = express()
const PORT = process.env.PORT || 9090

routes(app)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))