function createNewTodo(name) {
  const $li = document.createElement('li');
  const $div = document.createElement('div');
  $div.className = 'view';
  
  const $inputToggle = document.createElement('input');
  $inputToggle.setAttribute('type','checkbox');
  $inputToggle.className = 'toggle';
  $inputToggle.addEventListener('click', function() {
    if ($li.className === 'completed') {
      $li.removeAttribute('class');
      $inputToggle.removeAttribute('checked');
      store.toggleTodoStatus();
    } else {
      $li.setAttribute('class', 'completed');
      $inputToggle.setAttribute('checked','');
      store.toggleTodoStatus(); 
    }
  }); 

  const $label = document.createElement('label');
  $label.textContent = name;

  const $button = document.createElement('button');
  $button.className = 'destroy';

  $div.appendChild($inputToggle);
  $div.appendChild($label);
  $div.appendChild($button);

  const $inputEdit = document.createElement('input');
  $inputEdit.className = 'edit';

  $li.appendChild($div);
  $li.appendChild($inputEdit);

  return $li;
};

function createStore () {
  const todos = [];
  const $ulTodoList = document.querySelector('.todo-list');
  let status = 'SHOW_ALL';

  const render = function() {
    let filterdTodos;
    
    if (status === 'SHOW_ACTIVE') {
      filterdTodos = todos.filter(function(todo) {return !todo.isCompleted});
    } else if (status === 'SHOW_COMPLETED') {
      filterdTodos = todos.filter(function(todo) {return todo.isCompleted});
    } else {
      filterdTodos = todos;
    }
    console.log(filterdTodos);
    // ul.todo-listの中身を削除
    for (let i = 0; $ulTodoList.children.length; i++) {
      $ulTodoList.removeChild($ulTodoList.children[0]);
    }
    //for文 前から 初期化・処理の前・処理の後
    for (let i = 0; i < filterdTodos.length; i++) {
      const $li = createNewTodo(filterdTodos[i].label);
      $ulTodoList.appendChild($li);
    }
  }

  const addTodo = function(label) {
    const todo = { 
      label: label,
      isCompleted: false,
      id: Math.floor(10000 * Math.random()),
    };
    todos.push(todo);
    render();
  };
  
  const showAll = function() {
    status = 'SHOW_ALL';
    render();
  };
  
  const showActive = function() {
    status = 'SHOW_ACTIVE';
    render();
  };
  
  const showCompleted = function() {
    status = 'SHOW_COMPLETED';
    render();
  };

  const toggleTodoStatus = function(id) {
    const todo = todos.find(function(todo){});
    // const todo = todosからidに該当するtodoをとってきて代入する
    if (!todo.isCompleted) {
      todo.isCompleted = true;
    } else {
      todo.isCompleted = false;
    }
  };
  
  return {
    addTodo: addTodo,
    showAll: showAll,
    showActive: showActive,
    showCompleted: showCompleted, 
    toggleTodoStatus: toggleTodoStatus,// 複数の値はreturnできない いくつも返すときはオブジェクト(か、配列。)
  };
};

const store = createStore();

const $liTodofilters = document.querySelectorAll('.filters > li');
const $inputNewTodo = document.querySelector('.new-todo');

$liShowAll = $liTodofilters[0];
$liShowActive = $liTodofilters[1];
$liShowCompleted = $liTodofilters[2];

$liShowAll.addEventListener('click',store.showAll);
$liShowActive.addEventListener('click',store.showActive);
$liShowCompleted.addEventListener('click',store.showCompleted);

$inputNewTodo.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    const todoLabel = $inputNewTodo.value;
    store.addTodo(todoLabel);
    $inputNewTodo.value = '';
  }
});
