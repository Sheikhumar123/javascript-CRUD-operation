// I declear some global variables to get and set input fileds values or update and generate a row
let titleText = document.getElementById("title");
let notesText = document.getElementById("notes");
let dueDate = document.getElementById("date");
let priorityText = document.getElementById("priority");
let statusText = document.getElementById("Completed");
let inputForm = document.getElementsByClassName("input-form")[0];

// code to display the form which gets data
let showFormBtn = document.getElementById("new");
let showForm = (edit = false, e) => {
  if (edit == false) {
    titleText.value="";
    notesText.value="";
    dueDate.value="";
    priorityText.value= "High";
    statusText.value="False";
    document.getElementById('update').style.display="none";
    document.getElementById('save').style.display="block";
    inputForm.style.display = "flex";
  } else {
    let status = e.target.parentNode.previousElementSibling;
    let notes = e.target.parentNode.previousElementSibling.previousElementSibling;
    let date = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling;
    let priority = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    let title = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    
    // now set these values to the input fileds of the form so user can edit this and then save this,
    titleText.value = title.innerText;
    notesText.value = notes.innerText;
    dueDate.value = date.innerText;
    priorityText.value = priority.innerText;
    statusText.value = status.innerText;

    document.getElementById('save').style.display="none";
    document.getElementById('update').style.display="block";
    inputForm.style.display = "flex";

    // now when user click on save btn data updates
    document.getElementById('update').onclick=()=>{
        title.innerText = titleText.value;
        notes.innerText = notesText.value;
        date.innerText = dueDate.value;
        priority.innerText = priorityText.value;
        status.innerText = statusText.value;
        inputForm.style.display="none";
    }
  }
};
showFormBtn.onclick = () => {
  showForm();
};

// code to hide the form
let hideFormBtn = document.getElementById("close");
let hideForm = () => {
  let inputForm = document.getElementsByClassName("input-form")[0];
  inputForm.style.display = "none";
};
hideFormBtn.onclick = () => {
  hideForm();
};

// Generate a row functionality
let saveBtn = document.getElementById("save");
let generateRow = () => {
  // code that generate a task
  let newTask = document.createElement("tr");
//   title
  let taskTd = document.createElement('td');
  let taskTdTxt = document.createTextNode(titleText.value);
  taskTd.appendChild(taskTdTxt);
  newTask.appendChild(taskTd);
//   priority
  let priorityTd = document.createElement('td');
  let priorityTdTxt = document.createTextNode(priorityText.value);
  priorityTd.appendChild(priorityTdTxt);
  newTask.appendChild(priorityTd);
//   Due Date
  let dateTd = document.createElement('td');
  let dateTdTxt = document.createTextNode(dueDate.value);
  dateTd.appendChild(dateTdTxt);
  newTask.appendChild(dateTd);
// Notes
  let notesTd = document.createElement('td');
  let notesTdTxt = document.createTextNode(notesText.value);
  notesTd.appendChild(notesTdTxt);
  newTask.appendChild(notesTd);
// completed
  let statusTd = document.createElement('td');
  let statusTdTxt = document.createTextNode(statusText.value);
  statusTd.appendChild(statusTdTxt);
  newTask.appendChild(statusTd);
// butons
  let buttonsTd = document.createElement('td');
  buttonsTd.setAttribute('class','btnTd')
  let butonsTdTxt = document.createTextNode('');
  buttonsTd.appendChild(butonsTdTxt);
  newTask.appendChild(buttonsTd);

//   append the row into tbody
  document.getElementById('tbody').appendChild(newTask);
  let btns = document.getElementsByClassName('btnTd');
  for (let i = 0; i < btns.length; i++) { 
        btns[i].innerHTML=('<a href="#" onclick="showForm(true,event)">Edit</a> | <a href="#" onclick="deleteRow(event)">Delete</a>'); 
  } 
  inputForm.style.display="none";
}

saveBtn.onclick = () => {
  generateRow();
};

// Delete a row
let deleteRow = (e)=>{
    e.target.parentNode.parentNode.remove();
}