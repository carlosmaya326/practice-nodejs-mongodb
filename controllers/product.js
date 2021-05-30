const Product = require('../models/product');

function getProducts(req, res) {
	Product.find({}, (err, products) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err.message}` });
		if(!products) return res.status(404).send({ message: `No existen productos` });

		res.status(200).send({ products });
	});
}

function getProduct(req, res) {
	let id = req.params.id;

	Product.findById(id, (err, product) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err.message}` });
		if(!product) return res.status(404).send({ message: `El producto no existe` });

		res.status(200).send({ product });
	});
}

function saveProduct(req, res) {
	console.log('POST /api/product');
	console.log(req.body);

	let body = req.body;

	let product = new Product();
	product.name = body.name;
	product.picture = body.picture;
	product.price = body.price;
	product.category = body.category;
	product.description = body.description;

	product.save((err, productStore) => {
		if(err) res.status(500).send({ message: `Error al guardar el producto ${err}` });

		res.status(200).send({ 
			message: productStore
		});
	});
}

function updateProduct(req, res) {
	let id = req.params.id;
	let body = req.body;

	Product.findByIdAndUpdate(id, body, (err, productUpdated) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err.message}` });
		if(!productUpdated) return res.status(404).send({ message: `El producto no existe` });

		res.status(200).send({ product: productUpdated });
	});
}

function deleteProduct(req, res) {
	let id = req.params.id;

	Product.findById(id, (err, product) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err.message}` });
		if(!product) return res.status(404).send({ message: `El producto no existe` });

		product.remove(err => {
			if(err) return res.status(500).send({ message: `Error al realizar la petición ${err.message}` });
			
			res.status(200).send({ message: `El producto ha sido eliminado` });
		});
	});
}

module.exports = {
	getProducts,
	getProduct,
	saveProduct,
	updateProduct,
	deleteProduct
};