const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 5 * 60,
  },
});


async function sendVerificationEmail(email, otp){
    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            otp
        )
        console.log("Email Response", mailResponse.response)
    }
    catch(error){
        console.log("Error while sending email",error)
        throw error;
    }
}



OTPSchema.pre("save", async function(next){
	console.log("New document saved to database");

        if(this.isNew){
            await sendVerificationEmail(this.email, this.otp)
        }
        next();
})

module.exports = mongoose.model("OTP", OTPSchema);
