import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler'

const app = express()
const httpServer = createServer(app)

const cors = {
  origin: 'http://localhost:5173'
}

app.use(cors(cors))
app.use(express.json())

app.use(errorHandler)
const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})