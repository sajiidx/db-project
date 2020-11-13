const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')
const upload = require('../middleware/upload')

router.get('/',ProductController.index)

router.post('/show',ProductController.show)
router.post('/store',upload.single('picture'), ProductController.store)
router.post('/update',ProductController.update)
router.post('/delete',ProductController.destory)

module.exports = router