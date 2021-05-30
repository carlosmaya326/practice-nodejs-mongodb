const services = require('../services');

function isAuth(req, res, next){
	if(!req.headers.authorization) {
		return res.status(403).send({ message: 'No tienes autorizacion'});
	}
	
	const token = req.headers.authorization.split(" ")[1];
	
	services.decodeToken(token)
		.then(res => {
			req.user = res;
			next();
		})
		.catch(err => {
			res.status(res.status);
		});
}

module.exports = isAuth;