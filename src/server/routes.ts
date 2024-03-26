import path from 'path';
import express from 'express';

const currentWorkingDir = process.cwd();
const router = express.Router();

// Default route
const homePagePath = path.join(currentWorkingDir, 'src', 'index.html');
router.get('/', (req, res) => {
    res.sendFile(homePagePath);
});

// Recipe page routes
router.get('/recipe-page', (req, res) => {
    res.sendFile(path.join(currentWorkingDir, 'src', 'recipe-page', 'index.html'));
});
router.get('/recipe-page/styles', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.join(currentWorkingDir, 'src', 'recipe-page', 'styles.css'));
    }, 1000);
});
router.get('/recipe-page/images/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(path.join(currentWorkingDir, 'public', 'images', 'recipe-page', fileName));
});
router.get('/recipe-page/fonts/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(path.join(currentWorkingDir, 'public', 'fonts', fileName));
});

export default router;
