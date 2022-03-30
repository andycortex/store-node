const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();

const service = new ProductsService();

router.get('/filter', (req, res) => {
    res.send('hola soy un filter');
}); 
router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
});

// ponerlo antes que la ruta dinamica
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = service.findOne(id);
    res.status(200).json(product);
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

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
    // res.status(201).json({
    //     message: 'Product Created',
    //     data: body,
    // })
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.status(200).json(product);
    // res.json({
    //     message: 'Product Updated',
    //     data: body,
    //     id,
    // })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);
    res.status(200).json(rta);
    // res.json({
    //     message: 'Product Deleted',
    //     id,
    // })
})

module.exports = router;