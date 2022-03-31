const express = require('express');
const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();

const service = new ProductsService();

router.get('/filter', (req, res) => {
    res.send('hola soy un filter');
}); 
router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

// ponerlo antes que la ruta dinamica
router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async(req, res, next) => {
        try {
            const id = req.params.id;
            const product = await service.findOne(id);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
        // if (id === '10' ) {
        //     res.status(404).json({
        //         message: 'Product Not Found',
        //     });
        // }else {
        //     res.json({
        //         id: id,
        //         name: 'Product 2',
        //         price: 2000
        //     })
        // }
    });

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json(newProduct);
        // res.status(201).json({
        //     message: 'Product Created',
        //     data: body,
        // })
    })

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            res.json(product)
            // res.status(200).json(product);
        } catch (error) {
            next(error)
            // res.status(404).json({
            //     message: error.message,
            // })
        }
        
        // res.json({
        //     message: 'Product Updated',
        //     data: body,
        //     id,
        // })
    })

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json(rta);
    // res.json({
    //     message: 'Product Deleted',
    //     id,
    // })
})

module.exports = router;