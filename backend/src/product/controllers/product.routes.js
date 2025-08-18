// manages routes and paths to product controller
import ProductController from './product.controller.js';
import express from 'express'; 
import { upload } from '../../middlewares/fileupload.middlewares.js';

const productController = new ProductController();
// initialize the express router
const router = express.Router();

router.get('/', productController.getAllProducts);

router.post('/add',upload.single("imageUrl") ,productController.addProduct)

router.post('/rate', productController.rateProduct);
 
router.get('/:id', productController.getOneProduct);




export default router;