// Modulo de tasks
// Adiciona, salva, seleciona e carrega tasks
// Recebe o objeto do modulo Storage

function Tasks(storage) {
	this.container = document.getElementById('tasks');
	this.addButton = document.getElementById('add-button');

	this.tasks = [];
	this.storageKey = 'tasks';
	this.storage = storage;
	this.details = new TaskDetails(this.save.bind(this));

	this.bind();
	this.load();
}

Tasks.prototype.bind = function() {
	this.addButton.addEventListener('click', this.create.bind(this));
};

Tasks.prototype.load = function() {
  	var tasks = this.storage.get(this.storageKey) || this.tasks;

  	for (var i = 0; i < tasks.length; i++) {
  		this.add(tasks[i].data);
  	}
};

Tasks.prototype.save = function() {
	this.storage.save(this.storageKey, this.tasks);
};

Tasks.prototype.create = function() {
	this.add();
};

Tasks.prototype.unselectAll = function() {
	var className = 'task-item';
	var items = document.getElementsByClassName(className);
	for (var i = 0; i < items.length; i++) {
		items[i].className = className;
	}
};

Tasks.prototype.select = function(event) {
	this.unselectAll();
	var target = event.target.tagName === 'LI' ? event.target.firstElementChild: event.target;
	while(event.target.parentNode && !target.id) {
		target = target.parentNode;
	}
	var item = document.getElementById(target.id);
	if(item) {
		item.className = item.className + ' active';
		var task = this.tasks.find(function(task) {
			return task.data.id === parseInt(target.id);
		});	
		this.details.set(task);
	}
};

Tasks.prototype.add = function(task) {
	var newTask = new Task(task);
	var listItem = document.createElement('li');
	listItem.appendChild(newTask.taskTemplate);
	var element = this.container.appendChild(listItem);
	element.addEventListener('click', this.select.bind(this), false);
	this.tasks.push(newTask);

	if(!task) {
		element.click();
	}
};

