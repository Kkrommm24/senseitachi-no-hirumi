import cloudinary from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'food_images',
    format: async (req, file) => {
      const ext = file.mimetype.split('/')[1];
      return ext; // Use the file's original extension
    },
    public_id: (req, file) => Date.now().toString() + '-' + file.originalname,
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WEBP, JPG and GIF are allowed.'));
    }
  },
});

export const uploadImage = upload.single('image');

export const handleImageUpload = (req, res) => {
  const imageUrl = req.file.path;
  res.status(200).json({ imageUrl });
};