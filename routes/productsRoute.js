const express = require("express");
const router = express.Router();
const con = require("../lib/db_Connection");


router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM products", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.post('/', (req, res)=> {
        const { price, description, imgURL, category, gender, title,}= req.body
        try{
            con.query(
                `INSERT INTO products (price, description, imgURL, category, gender, title,) values('${title}', '${price}', '${description}', '${imgURL}', '${category}', '${gender}'
            )`,
                (err, result) => {
                if (err) throw err;
                res.send(result);
            });
    
        } catch (error) {
            console.log(error)
            res.status(400).json({msg: error})
        };
    });
    
    // router.put("/:id", (req, res) => {
    //     const{
    //          sku, name, price, weight, description, thumbnail, image, category, create_date, stock}= req.body
    //     try {
    //         con.query(`UPDATE  FROM products SET sku='${sku}', name='${name}', price='${price}', weight='${weight}'description='${description}', thumbnail='${thumbnail}' image ='${image}', category='${category}', create_date='${create_date}', stock='${stock}',   WHERE products =${req.params.id}`, (err, result) => {
    //             if (err) throw err;
    //             res.send(result);
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).send(error)
    //     }
    // });

module.exports = router;