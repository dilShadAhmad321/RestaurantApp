import Order from '../models/Order.js'


// create new Order
export const createOrder = async(req,res) => {
   const newOrder = new Order(req.body)

   try {
      const savedOrder = await newOrder.save()

      res.status(200).json({success:true, message:"Successful!", data:savedOrder})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single Order
export const getOrder = async(req,res) => {
   const id = req.params.id
   
   try {
      const order = await Order.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:order})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all Order
export const getAllOrder = async(req,res) => {
   
   try {
      const orders = await Order.find()

      res.status(200).json({success:true, message:"Successful!", data:orders})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 