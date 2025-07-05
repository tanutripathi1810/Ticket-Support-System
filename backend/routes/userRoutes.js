const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  completeIntro,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.put('/complete-intro', protect, completeIntro);

module.exports = router
