const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "app/uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});


const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
      cb(new Error("Invalid file type. Only JPEG and PNG are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter })
module.exports = upload;