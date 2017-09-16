// Modulo de detalhes de tasks
// Edita a task e salva no Storage
// Recebe uma função callback para salvar a task

function TaskDetails(save) {
	this.init(save);
}

TaskDetails.prototype = function() {
	var task = undefined,
		save = undefined,
		container = document.getElementById('task-details'),
		closeButton = document.getElementById('close-button'),
		titleInput = document.getElementById('title-input'),
		descriptionInput = document.getElementById('description-input'),
		className = 'task-details',
		visibleModifier = '__visible',

	bind = function() {
		closeButton.addEventListener('click', close);
		titleInput.addEventListener('keyup', updateTitle);
		descriptionInput.addEventListener('keyup', updateDescription);
	},

	updateTitle = function(event) {
		task.data.title = event.target.value;
		task.render(true);
		save();
	},

	updateDescription = function(event) {
		task.data.description = event.target.value;
		task.render(true);
		save();
	},

	render = function() {
		titleInput.value = task.data.title;
		descriptionInput.value = task.data.description;
	},

	open = function() {
		var visibleClass = className + visibleModifier;
		container.className = container.className + ' ' + visibleClass;
	},

	close = function() {
		container.className = className;
	};

	return {
		init: function(_save) {
			save = _save;
			bind();
		},
		set: function(_task) {
			task = _task;
			open();
			render();
		}
	}
}();