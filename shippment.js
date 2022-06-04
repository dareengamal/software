/*import express from 'express';

const router = express.Router();

router.get('/' , ( req , res) => {
    res.send('THIS WORK');
});

export default router ;*/
import express from 'express';
import { getshippment, updateshippment, createshippment } from '../controllers/App.js';

const router=express.Router();


 //router.get('/', getProducts);
 router.get('/{order_id}',getshippment);
 router.post('/',createshippment);
 router.patch('/',updateshippment);


export default router;
