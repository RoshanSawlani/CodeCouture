// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require('crypto-js');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let user =await User.findOne({"email":req.body.email})

        const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
        let decryptedPass = (bytes.toString(CryptoJS.enc.Utf8))

        if(user){
        if(req.body.email == user.email && req.body.password == decryptedPass) {
            res.status(200).json({ success: true,email:user.email,name:user.name })
        }
        else{
            res.status(200).json({ success: false,error:"Invalid credentials" })
        }
    }
    else{
        res.status(200).json({ success:false,error:"No user found" })
    }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler)