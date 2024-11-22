import 'dotenv/config';
import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler.js'
import foodRoutes from './routes/foodRoutes.js';

const app = express()
const httpServer = createServer(app)

const corsOptions = {
  origin: 'http://localhost:5173'
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', foodRoutes);

app.use(errorHandler)
const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
