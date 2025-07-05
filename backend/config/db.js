const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...')
    console.log('Connection string:', process.env.MONGODB_URI)
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log('MongoDB connection error:', error)
    process.exit(1)
  }
}

module.exports = connectDB