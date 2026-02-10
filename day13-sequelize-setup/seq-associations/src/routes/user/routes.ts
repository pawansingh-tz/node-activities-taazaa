import { Router } from 'express'
import { User } from '.../models/User'
import { Phone } from '.../models/Phone'

const router = Router()

// GET all users with their phone numbers
router.get('/users', async (req:Request, res:Response) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Phone,
          attributes: ['id', 'phoneNumber'],
        },
      ],
    })

    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default router
