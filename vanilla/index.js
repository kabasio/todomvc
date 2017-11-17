const $inputNewTodo = document.getElementsByClassName('new-todo')[0];

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
    } else {
      $li.setAttribute('class', 'completed');
      $inputToggle.setAttribute('checked','');
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

$inputNewTodo.addEventListener('keydown', f unction(e) {
  if (e.keyCode === 13) {
    const newTodo = $inputNewTodo.value;
    // store.addTodo(newTodo)
    const $ulTodoList = document.getElementsByClassName('todo-list')[0];
    const $li = createNewTodo(newTodo);
    $ulTodoList.appendChild($li);
    $inputNewTodo.value = '';
  }
});

/* todos で　タスクをためておく配列を作る

const todos = [
  { 
    id: 000,
    label: 'ほげ',
    isCompleted: true,
  },
  { 
    id: 001,
    label: 'ほげ',
    isCompleted: true,
  },
  { 
    id: 002,
    label: 'ほげ',
    isCompleted: false,
  },
];
*/
function CreateStore () {
    const todos = [];
    const $ulTodoList = document.querySelector('.todo-list');
    let satus = 'SHOW_ALL';

    const render = function() {
      let filterdTodos;
      
      if (satus === 'SHOW_ACTIVE') {
        filterdTodos = todos.filter(function(todo) {return !todo.isCompleted});
      } else if (satus === 'SHOW_COMPRETED') {
        filterdTodos = todos.filter(function(todo) {return todo.isCompleted});
      } else {
        filterdTodos = todos;
      }
    }
  // ul.todo-listの中身を削除
  while($ulTodoList.firstChild === null) {
    $ulTodoList.removeChild($ulTodoList.firstChild);
  }
  //for文 前から 初期化・処理の前・処理の後
  for (let i = 0; i < filterdTodos.length; i++) {
    const $li = createNewTodo(filterdTodos[i].label);
    $ulTodoList.appendChild($li);
  }
};

const addTodo = function(label) {
  const todo = { 
    label: label,
    isCompleted: false,
  },
  todos = todos.push(todo);
  render();
};

const showAll = function() {
  status = 'SHOW-ALL';
  render();
};

const showActive = function() {
  status = 'SHOW-ACTIVE';
  render();
};

const showCompereted = function() {
  status = 'SHOW=COMPLETED';
  render();
};

return {
  addTodo: addTodo,
  showAll: showAll,
  showActive: showActive,
  showCompereted: showCompereted,
};

const store = CreateStore();
store.showAll();
store.showActive();
store.showCompereted();