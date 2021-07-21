const express = require("express");
const productsController = express.Router();
const { fetchAllProducts, getProduct, updateProduct, createProduct, deleteProduct } = require("../queries/products");


productsController.get("/", async (req, res) => {
    const products = await fetchAllProducts();
    res.json({success: true, payload: products})
})

productsController.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await getProduct(id);
    res.json({success: true, payload: product})
})

productsController.post("/", async (req, res) => {
   const newProduct = await createProduct(req.body);
    res.json({success: true, payload: newProduct})
})

productsController.put("/:id", async (req, res) => {
    const { body, params } = req;
    const { name, photo, description, price } = body;
    if(!name || !photo || !description || !price) {
        res.status(422).json({
            error: true, success: false, message: "Missing information, try again."
        });
    } else{
        const editedProduct = await updateProduct(params.id, body);
        res.json({success: true, payload: editedProduct})
    }
})

productsController.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    res.json({
        success:true, payload: deletedProduct
    });
});

module.exports = productsController;