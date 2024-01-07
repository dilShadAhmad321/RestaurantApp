import Report from '../models/Report.js'


// create new Report
export const createReport = async(req,res) => {
   const newReport = new Report(req.body)

   try {
      const savedReport = await newReport.save()

      res.status(200).json({success:true, message:"Successful!", data:savedReport})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single Report
export const getReport = async(req,res) => {
   const id = req.params.id
   
   try {
      const report = await Report.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:report})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all Report
export const getAllReport = async(req,res) => {
   
   try {
      const reports = await Report.find()

      res.status(200).json({success:true, message:"Successful!", data:reports})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 