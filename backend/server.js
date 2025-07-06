const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()

console.log('MONGODB_URI:', process.env.MONGODB_URI) // Add this line to debug
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors'); 
const PORT = process.env.PORT || 5000

// Connect to DB
connectDB()

const app = express()
app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// serve front end
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Support Ticketing System API' })
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold))