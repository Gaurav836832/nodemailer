import nodemailer from 'nodemailer';



async function sendmail() {

    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "yourmail@gmail.com",
            pass: "zyus 3qfjp mmoo sbvt"
        }
    })

    let mailOptions = {
        from: 'senderMial@gmial.com',
        to: 'recievermial@gmail.com', // Can be a comma-separated string for multiple recipients
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
