import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

const s3 = new AWS.S3({});

const fileUpload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: process.env.S3_BUCKET,
        key: function (_req, file, cb) {
            cb(null, new Date().toISOString() + "-" + file.originalname);
        },
    }),
});

export default fileUpload;
