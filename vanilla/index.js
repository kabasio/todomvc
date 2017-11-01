/* console.log('Hi');


const question = prompt('Hi?');

if (question === 'fine') {
  alert("I'm so glad to hear that.");
} else {
  alert('Are you ok? ');
} */

const input = document.getElementsByClassName('new-todo') [0] ;

function createNewTask (name){
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'view';

  const input = document.createElement('input');
  input.setAttribute('type','checkbox');

  const label = document.createElement('label');
  label.value = name;

  const button = document.createElement('button');
  button.className = 'destroy';

  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(button);

  const edit = document.createElement('input');
  edit.className = 'edit';

  li.appendChild(div);
  li.appendChild(edit);


  return li;
}; 


input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    createNewTask();
    const newTask = input.value;
    const oya = document.getElementsByClassName('todo-list')[0];
    const  li  = createNewTask(newTask);
    oya.appendChild(li);
    console.log(newTask);

    /* やりたいこと
 1.フォームの値を取得する ◎
 2.新しいliをつくる
 3.todo-rist(ul)に、上記で作成したliを入れる
 4.liに取得した値を入れる(data-idってやつがひもづいてる
    console.log(newTask);
    */
  }
});

