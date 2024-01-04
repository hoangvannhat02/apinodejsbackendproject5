import express, { Request, Response , Application } from 'express';
const cors = require('cors');
const bodyPaser = require('body-parser');
import routerAdmin from './routes/admin';
import routerUser from './routes/user';
import multer from 'multer';

const fs = require('fs');
const path = require('path');
// import dotenv from 'dotenv';
// dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});
app.use(cors({
  origin: '*'
}));

// Cấu hình lưu trữ cho Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Đặt điều kiện để xác định thư mục đích tùy thuộc vào loại ảnh
    let uploadPath = '';
    if (file.fieldname === 'file') {
      uploadPath = 'uploads/products/';
    } else if (file.fieldname === 'userImage') {
      uploadPath = 'uploads/users/';
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Tạo một instance của Multer middleware
const upload = multer({ storage: storage });
app.use('/uploads/products', express.static('uploads/products'));
app.use('/uploads/users', express.static('uploads/users'));
app.use('/uploads/news', express.static('uploads/news'));

// Định nghĩa route xử lý việc tải lên tệp
app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Xử lý thành công việc tải lên tệp
  const filePath = req.file.path;
  return res.status(200).send({message:'File uploaded successfully.',url:filePath});
});

app.delete('/api/deleteImage', (req, res) => {
  const imageName = req.query.imageName;
  
  const imagePath = path.join(__dirname,'..', imageName); // Thay đổi đường dẫn thư mục nếu cần
  
  // Kiểm tra xem tệp tin tồn tại hay không
  if (fs.existsSync(imagePath)) {
    // Nếu tồn tại, thực hiện xóa tệp tin
    console.log("Tồn tại");
    
    fs.unlinkSync(imagePath);
    res.json({ success: true, message: 'File đã được xóa thành công.' });
  } else {
    res.status(404).json({ success: false, message: 'File không tồn tại.' });
  }
});

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: true}));
app.use('/admin',routerAdmin)
app.use('/user',routerUser)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});