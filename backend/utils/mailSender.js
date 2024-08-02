const nodemailer = require('nodemailer');


const mailSender = async (email, title, body) =>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                host:process.env.MAIL_HOST
            }
        })


        let info = transporter.sendMail({
            from:"BiGamer - Online Games And Tournaments || By Akshat",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log(info)
        return info;
    }
    catch(error){
        console.log(error.message)
    }
}