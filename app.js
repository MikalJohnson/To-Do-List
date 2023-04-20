var toggleCheck = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the checkbox
    // Use the classList property to toggle the class checked, for example, varName.classList.toggle('checked')
  let parent = this.parentNode;
  parent.classList.toggle('checked');

  };
  
  var deleteTodo = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the delete button
    // Remove the list item using the .remove() function, for example, varName.remove()
    let todoLi = this.parentNode;
    todoLi.remove();
  };
  
  var addTodo = function(todo) {
    let li = document.createElement('li');
  
    let label = document.createElement('label');
    label.innerHTML = todo;
    
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    // Write code to trigger the toggleCheck function once the checkbox is clicked
    checkbox.onlick = toggleCheck;
  
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    // Write code to trigger the deleteTodo function once the delete button is clicked
    deleteButton.onclick = deleteTodo;
  
    // Nest todo elements in list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
  
    // Write code to append todo element in list with "todoList" id
    let todoList = document.querySelector('#todoList')
    todoList.appendChild(li)
  };
  
  document.getElementById('add').onclick = function() {
      // Store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // Store the input, which is the first child element of the .addTodo <div>
    var addTextInput = parent.children[0];
    // Make sure that the input's value is not empty in the following if condition
    if(addTextInput.value === '') {
        return;
    }   else {
    // Add todo
      addTodo(addTextInput.value)
    // Reset input 
    addTextInput.value = "";
    }
  };