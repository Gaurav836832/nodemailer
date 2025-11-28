import nodemailer from 'nodemailer';



async function sendmail() {

    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gsoni7424@gmail.com",
            pass: "zyus qfjp mmoo sbvt"
        }
    })

    let mailOptions = {
        from: 'gsoni7424@gmail.com',
        to: 'gauravsoni176415@gmail.com', // Can be a comma-separated string for multiple recipients
        subject: 'Sending Email with Nodemailer',
        text: 'This is a plain text email from Nodemailer.',
        html: '<b>This is an HTML email from Nodemailer!</b>' // Optional HTML body
    };
    try {
        const result = await mailTransport.sendMail(mailOptions)
        console.log("email send successfully")
    } catch (err) {
        console.log(err)
    }


}



sendmail()