// Modulo de armazenamento de dados
// Recebe um prefixo com o namespace da aplicacao

function Storage(prefix) {
	this.prefix = prefix;

	if(!typeof(Storage) === 'undefined') {
		console.error('Seu navegador não suporta localStorage!');
	}
}

Storage.prototype.get = function(key) {
	return JSON.parse(localStorage.getItem(this.prefix + key));
}

Storage.prototype.save = function(key, obj) {
	return localStorage.setItem(this.prefix + key, JSON.stringify(obj));
}