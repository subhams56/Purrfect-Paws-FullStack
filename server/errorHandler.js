export const errorHandler =( err,msg,status)=>{
    
  console.log(err)
   return res.status(status).json({msg:msg});
}