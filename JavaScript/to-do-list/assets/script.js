function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";
  
    createChekedButton(li);
  }

  function createCheckedButton(li) {
    let input = document.createElement("input_checkbox");
    let txt = document.createTextNode("checked");
  
    span.className = "checked";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "checked";
  }

  document.querySelectorAll('li').forEach(createCheckedButton);

document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
});