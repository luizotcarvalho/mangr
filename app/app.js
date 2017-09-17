// Modulo principal da aplicação
// Inicializa o storage e tasks
// Recebe o namespace da aplicação

function Mngr(name) {
	var storage = new Storage(name);
	var tasks = new Tasks(storage);
}