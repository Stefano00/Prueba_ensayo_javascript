const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "stefano00",
    database: "postgres",
    port: 5433,
});

pool.connect();

async function search({ category, brand, store }) {
    console.log("probando");
    console.log(category, brand, store);
    let query = `
    SELECT stores.store_name, products.product_id, products.product_name, stocks.quantity
    FROM products 
    INNER JOIN stocks ON products.product_id = stocks.product_id
    INNER JOIN stores ON stocks.store_id = stores.store_id 
    WHERE products.product_name IS NOT NULL
  `;
    if (store) query += ` AND stores.store_id = ${store}`;
    if (category) query += ` AND products.category_id = ${category}`;
    if (brand) query += ` AND products.brand_id = ${brand}`;


    const result = await pool.query(query);
    console.log(result);
    return result;
}

async function getTiendas() {
    try {
        const result = await pool.query(`SELECT * FROM stores`);
        return result.rows;
    } catch (e) {
        console.log(e);
        return e;
    }
}

async function getBrands() {
    try {
        const result = await pool.query(`SELECT * FROM brands`);
        return result.rows;
    } catch (e) {
        console.log(e);
        return e;
    }
}

async function getCategorias() {
    try {
        const result = await pool.query(`SELECT * FROM categories`);
        return result.rows;
    } catch (e) {
        console.log(e);
        return e;
    }
}



module.exports = {
    search,
    getTiendas,
    getCategorias,
    getBrands
};
