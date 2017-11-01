const $inputNewTodo = document.getElementsByClassName('new-todo')[0];

function createNewTodo(name) {
  const $li = document.createElement('li');
  const $div = document.createElement('div');
  $div.className = 'view';

  const $inputToggle = document.createElement('input');
  $inputToggle.setAttribute('type','checkbox');
  $inputToggle.className = 'toggle';

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

$inputNewTodo.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    const newTodo = $inputNewTodo.value;
    const $ulTodoList = document.getElementsByClassName('todo-list')[0];
    const $li = createNewTodo(newTodo);
    $ulTodoList.appendChild($li);
    $inputNewTodo.value = '';
  }
});
