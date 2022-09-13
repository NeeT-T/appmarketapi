const getProducts = (req, res) => {
    return res.status(200).send([
        {
            "name": "Product Name1",
            "price": "Product Price1",
            "category": "Product Category1",
            "market": "Product market1",
        },
        {
            "name": "Product Name1",
            "price": "Product Price1",
            "category": "Product Category1",
            "market": "Product market1",
        },
        {
            "name": "Product Name2",
            "price": "Product Price2",
            "category": "Product Category2",
            "market": "Product market2",
        },
        {
            "name": "Product Name3",
            "price": "Product Price3",
            "category": "Product Category3",
            "market": "Product market3",
        },
        {
            "name": "Product Name4",
            "price": "Product Price4",
            "category": "Product Category4",
            "market": "Product market4",
        }
    ]);
}

const getMarkets = (req, res) => {
    return res.status(200).send([
        {
            "name": "Markets Name1",
            "address": "Markets Address1",
        },
        {
            "name": "Markets Name2",
            "address": "Markets Address2",
        }
    ]);
}

export default {
    getMarkets,
    getProducts
}