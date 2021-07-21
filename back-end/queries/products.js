const db = require("../db/dbConfig");

const fetchAllProducts = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts
    } catch (error) {
        console.log(error)
    }
};

const getProduct = async (id) => {
    try {
        const product = await db.one("SELECT * FROM products WHERE id= $1", id);
        return (product)
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async (product) => {
    try {
        const newProduct = await db.one("INSERT INTO products(name, photo, description, price)VALUES ($1, $2, $3, $4) RETURNING *",[product.name, product.photo, product.description, product.price]);
        return (newProduct)
    } catch (error) {
        console.log(error)
    }
}

const updateProduct = async (id, product) => {
    try {
      const { name, photo, description, price } = product;
      const query = "UPDATE products SET name = $1, photo = $2, description = $3, price = $4 WHERE id = $5 RETURNING *";
      const result = await db.one(query, [name, photo, description, price, id]);
      return result;
    } catch (error) {
      return error;
    }
  }

  const deleteProduct = async (id) => {
      try {
          const query = "DELETE FROM products WHERE id = $1 RETURNING *";
          const deletedProduct = await db.one(query, id);
          return deletedProduct;
      } catch (error) {
          return error;
      }
  }

module.exports = {fetchAllProducts, getProduct, updateProduct, createProduct, deleteProduct};
