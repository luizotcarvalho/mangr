// Modulo de task
// Renderiza o template de task reaproveitando o template do HTML
// Recebe os dados de cada task

function Task(task) {	
	task = task || {};
	this.data = {
		id: task.id || + new Date(),
		title: task.title || '',
		description: task.description || ''
	};
	this.taskTemplate = null;
	this.render();
}

Task.prototype.render = function(update) {
	var id = update ? this.data.id : 'task-template';
	var template = document.getElementById(id);
	var element = update ? template.parentElement : template.content;
	element.firstElementChild.id = this.data.id;
	element.querySelector('span').innerHTML = this.data.title;
	this.taskTemplate = document.importNode(element, true);
};