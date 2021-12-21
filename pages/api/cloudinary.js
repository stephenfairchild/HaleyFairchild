import nc from "next-connect";
import knex from "../../knex";
import fileUpload from "../../fileUpload";
import AWS from "aws-sdk";
var cloudinary = require("cloudinary").v2;

export const config = {
    api: {
        bodyParser: false,
    },
};

cloudinary.config({
    cloud_name: "stephen-fairchild",
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
});

const handler = nc()
    .use(fileUpload.single("imageFile"))
    .post(async (req, res) => {
        const { key, location } = req.file;
        console.log(key, location);
        try {
            const image = await sendToCloudinary(location);
            res.status(200).json({ success: true, image });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }

        res.status(200).json({ success: true });
    });

async function sendToCloudinary(imageUrl) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            imageUrl,
            { tags: "basic_sample" },
            function (err, image) {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                return resolve(image);
            }
        );
    });
}

export default handler;
