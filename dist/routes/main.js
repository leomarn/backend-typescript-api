"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const routes = (0, express_1.Router)();
const products = [];
routes.post('/products', (req, res) => {
    const id = (0, uuid_1.v4)();
    const { author, title, price } = req.body;
    const item = {
        id,
        author,
        title,
        price,
    };
    products.push(item);
    return res.send(item);
});
routes.get('/products', (req, res) => {
    const { id } = req.query;
    const product = id
        ? products.filter((allProducts) => allProducts.id.includes(id))
        : products;
    return res.send(product);
});
routes.put('/products/:id', (req, res) => {
    const { id } = req.params;
    if (products.some((product) => product.id === id)) {
        const index = products.findIndex((product) => product.id === id);
        const { author, title, price } = req.body;
        const item = {
            id,
            author,
            title,
            price,
        };
        products[index] = item;
        return res.send(products[index]);
    }
    return res.status(400).send('Produto não encontrado!');
});
routes.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    if (products.some((product) => product.id === id)) {
        const index = products.findIndex((product) => product.id === id);
        products.splice(index, 1);
        return res.send('Produto deletado com sucesso!');
    }
    return res.status(400).send('Produto não encontrado!');
});
exports.default = routes;
