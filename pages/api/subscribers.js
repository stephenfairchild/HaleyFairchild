import knex from "../../knex";
import sendMail from "../../sendMail";

export default async (req, res) => {
    if (req.method === "POST") {
        try {
            const { authorization } = req.headers;

            if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
                const [subscribers] = await knex.raw(
                    `SELECT email, channel,created_at FROM newsletter`
                );

                const items = [];
                subscribers.forEach((subscriber) => {
                    const { email } = subscriber;
                    const item = `<li> ${email}`;
                    items.push(item);
                });

                const html = `<h3>haleyfairchild.com Subscriber list</h3><ul>${items.join(
                    ""
                )}</ul>`;

                const msg = {
                    to: "stephenfairchilddev@gmail.com",
                    from: "noreply@haleyfairchild.com",
                    subject: `Newsletter Update: ${subscribers.length} total newsletter subscribers`,
                    text: `haleyfairchild.com Subscribers Count: ${subscribers.length}`,
                    html,
                };

                sendMail(msg);

                return res.status(200).json({ success: true, subscribers });
            } else {
                res.status(401).json({
                    success: false,
                    error: "API secret key not provided",
                });
            }
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
