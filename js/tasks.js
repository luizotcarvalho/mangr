// Modulo de tasks
// Adiciona, salva, seleciona e carrega tasks
// Recebe o objeto do modulo Storage

function Tasks(storage) {
	var details = new TaskDetails();
	this.init(storage, details);
}

Tasks.prototype = function() {
	var tasks = [],
		storage = undefined,
		details = undefined,
		storageKey = 'tasks',
		container = document.getElementById('tasks'),
		addButton = document.getElementById('add-button'),
	
	bind = function() {
		addButton.addEventListener('click', create);
	},

	load = function() {
	  	var _tasks = storage.get(storageKey) || tasks;

	  	for (var i = 0; i < _tasks.length; i++) {
	  		add(_tasks[i].data);
	  	}
	},

	save = function() {
		storage.save(storageKey, tasks);
	},

	create = function() {
		add();
	},

	add = function(task) {
		var newTask = new Task(task);
		var listItem = document.createElement('li');
		listItem.appendChild(newTask.taskTemplate);
		var element = container.appendChild(listItem);
		element.addEventListener('click', select, false);
		tasks.push(newTask);

		if(!task) {
			element.click();
		}
	},

	unselectAll = function() {
		var className = 'task-item';
		var items = document.getElementsByClassName(className);
		for (var i = 0; i < items.length; i++) {
			items[i].className = className;
		}
	},

	select = function(event) {
		unselectAll();
		var target = event.target.tagName === 'LI' ? event.target.firstElementChild: event.target;
		while(event.target.parentNode && !target.id) {
			target = target.parentNode;
		}
		var item = document.getElementById(target.id);
		if(item) {
			item.className = item.className + ' active';
			var task = tasks.find(function(task) {
				return task.data.id === parseInt(target.id);
			});	
			details.set(task);
		}
	};

	return {
		init: function(_storage, _details) {
			storage = _storage;
			details = _details;
			details.init(save);
			bind();
			load();
		}
	}
}();
