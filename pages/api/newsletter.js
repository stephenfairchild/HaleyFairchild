//const knex = require("knex")({
//    client: "mysql",
//    connection: {
//        host: process.env.mysql_host,
//        user: process.env.mysql_username,
//        password: process.env.mysql_password,
//        database: "haleyfairchild",
//        port: 3306,
//    },
//});

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "svs-beta.cy7ws0gobkpf.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "KNy75v4nLQNq",
        database: "haleyfairchild",
        port: 3306,
    },
});

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
