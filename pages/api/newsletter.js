import knex from "../../knex";

export default async (req, res) => {
    try {
        const { email } = req.body;
        await knex.raw(
            `INSERT INTO newsletter(email,channel) VALUES (:email, 'website')`,
            { email }
        );
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(200).json({ success: false, error });
    }
};
