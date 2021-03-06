const express = require('express');

const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const customersRouter = require('./customers.router');
const orderRouter = require('./order.router');
const authRouter = require('./auth.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/products', productsRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoriesRouter);
    router.use('/customers', customersRouter);
    router.use('/orders', orderRouter);
    router.use('/auth', authRouter);
    router.use('/profile', profileRouter);
}
module.exports = routerApi;