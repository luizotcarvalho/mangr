// Modulo de detalhes de tasks
// Edita a task e salva no Storage
// Recebe uma função callback para salvar a task

function TaskDetails(save) {
	this.save = save;
	this.className = 'task-details';
	this.visibleModifier = '__visible'

	this.container = document.getElementById('task-details');
	this.closeButton = document.getElementById('close-button');
	this.titleInput = document.getElementById('title-input');
	this.descriptionInput = document.getElementById('description-input');

	this.bind();
}

TaskDetails.prototype.bind = function() {
	this.closeButton.addEventListener('click', this.close.bind(this));
	this.titleInput.addEventListener('keyup', this.updateTitle.bind(this));
	this.descriptionInput.addEventListener('keyup', this.updateDescription.bind(this));
};

TaskDetails.prototype.set = function(task) {
	this.task = task;
	this.open();
	this.render();
}

TaskDetails.prototype.updateTitle = function(event) {
	this.task.data.title = event.target.value;
	this.task.render(true);
	this.save();
};

TaskDetails.prototype.updateDescription = function(event) {
	this.task.data.description = event.target.value;
	this.save();
};

TaskDetails.prototype.render = function() {
	this.titleInput.value = this.task.data.title;
	this.descriptionInput.value = this.task.data.description;
};

TaskDetails.prototype.open = function(task) {
	this.container.className = this.container.className + ' ' + this.className + this.visibleModifier;
};

TaskDetails.prototype.close = function() {
	this.container.className = this.className;
};