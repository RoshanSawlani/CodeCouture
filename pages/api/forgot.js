// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "@/models/Forgot";
import User from "@/models/User";


export default async function handler(req, res) {
    // Check if the user exist in the database
    // Send an email to the user
    if(req.body.sendEmail) {
    let token = 'dsfjsdfdfangdfgkfdg4656asdasd'
    let forgot = new Forgot({
        email:req.body.email,
        token:token
    })


    let email = `We have sent you this email in response to your request to reset your password on ${CodeCouture}.

    To reset your password for please follow the link below:

    <a href="https://codecouture.com/forgot?token=${token}">Click here to reset your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and change your password.

    <br/><br/>`
    }
    else{
        // Reset User Password
    }
    res.status(200).json({success:true});
}
