const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public");
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage });

app.get('/files', async (req, res) => {
    try {
        console.log('Attempting to read files...');
        const files = await fs.readdir(path.join(__dirname, 'public'));
        console.log('Files read successfully:', files);
        res.json({ files });
    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).json({ error: error.message });
    }
});


app.post('/upload',upload.single('file'),(req,res)=>{
 console.log(req.body)
 console.log(req.file);
 res.send("tgtg");


})

app.listen(3000,()=>{
    console.log('app is running')
})