import express from 'express'
import { createOrder, getAllOrder, getOrder } from '../controllers/orderController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createOrder)
router.get('/:id', verifyUser, getOrder)
router.get('/', verifyAdmin, getAllOrder)

export default router