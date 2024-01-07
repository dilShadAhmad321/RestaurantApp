import express from 'express'
import { createReport, getAllReport, getReport } from '../controllers/reportController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createReport)
router.get('/:id', verifyUser, getReport)
router.get('/', verifyAdmin, getAllReport)

export default router