const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: "stephenfairchilddev@gmail.com",
    from: "noreply@haleyfairchild.com",
    subject: "Daily Update: newsletter subscribers",
    text: "Here is an update",
    html: "<strong>We can include HTML here</strong>",
};

export default async function sendMail(msg) {
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }
    }
}
