// const express= require('express')
// const { userControler } = require('../controller')
// const router=express.Router()

// router.get('/',userControler)

// module.exports=router

const express = require('express');
const { userController } = require('../controller'); // Düzgün yoldan import edin

const router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;