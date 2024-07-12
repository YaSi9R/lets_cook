const User=require('./model')
const express=require('express')
const router=express.Router()
const path=require('path')

// There are 4 types of API's : Post=>To send data  , get=>To get data  ,  put=>To update data , delete=>To delete data 


          // Ṣending Image with API
          // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + "_photo"); // Append the extension of the original file
//     }
// });
// const upload = multer({ storage: storage });
// router.post("/save-user", upload.single("image"), async (req, res) => {







// Using Post API
router.post("/save-user",async (req, res) => {

     const user=new User(
    {
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    password:req.body.password
   
})
await user.save();
return res.send("successfully");

})

// Using Get API
router.get("/get-user", async(req, res) => {
    const data = await User.find();
    res.json(data);
})


// Using Delete API
router.delete("/remove-user/:_id", async(req, res, id)=> {

    const deletedData = await User.deleteOne(req.params.id);
    res.send("deleted data")
})


// Using Update API
router.put("/update-user/:_id", async (req, res)=> {
    const user = req.body;
    const updatedUser = await User.updateOne(user, req.params.id);
    res.send("upadted successfullu")
})



module.exports=router;