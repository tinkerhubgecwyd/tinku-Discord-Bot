////////////////////////////////////////

const mail_id = process.env.mail;
const pass = process.env.pass;

//////////////////////////////////////

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: mail_id, pass: pass } });

//////////////////////////////////////


module.exports = (destination, code) => {
    let mailOptions = {
        from: mail_id,
        to: destination,
        subject: 'CODE FOR DISCORD SERVER VERIFICATION',
        html: `
        <h2>👋 GREETINGS FROM VA-ZEER (BOT)</h2><br>
        <h3>TO VARIFY THAT YOU ARE FROM GEC WAYANAD TYPE</h3>
        <br><b style="color: red; text-decoration: underline;"><h1>/got_code ${code}</h1><b><br>
        <h3>IN ANY OF THE CHANNELS OF TINKERHUB GECW'S DISCORD SERVER.<h3>`
    };
	
	return new Promise((reolve, reject) => {
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
				reject('Failed to send mail 😐');
			} else {
				//console.log('Email sent: ' + info.response);
				reolve('Mail with a verification code has been send succesfully 😃');
			};
		});
	});
};