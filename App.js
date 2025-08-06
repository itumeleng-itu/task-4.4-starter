// Accessing the main element
const root = document.getElementById("root");
//styling
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.alignItems = "center";
root.style.backgroundColor = "#747577ff";
root.style.padding = "20px";
root.style.borderRadius = "10px";
root.style.width = "350px";
root.style.margin="100px auto";
root.style.boxShadow="2px 2px 4px black";

//adding a backgrond color to the body
document.body.style.backgroundColor="gray"

// Create a heading and append it inside the root
const heading = document.createElement("h1");
//styling
heading.id = "head";
heading.innerText = "Task Tracker";
heading.style.textAlign = "center";
heading.style.color = "white";
root.appendChild(heading);

// Create an input element and place it inside the root
const task = document.createElement("input");
//styling
task.type = 'text';
task.placeholder = "Enter Task";
task.style.width = "300px";
task.style.padding = "10px";
task.style.margin = "10px";
task.style.borderRadius = "5px";
task.style.border = "1px solid black";
root.appendChild(task);

// Create a button element and place it inside the root
const submit = document.createElement("button");
//styling
submit.textContent = "Submit Task";
submit.style.padding = "10px 20px";
submit.style.margin = "10px";
submit.style.borderRadius = "5px";
submit.style.border = "none";
submit.style.backgroundColor = "#949494ff";
submit.style.color = "white";
root.appendChild(submit);

// Create an unordered list element and place it inside the root
const list = document.createElement("ul");
//styling
list.style.listStyleType = "none";
list.style.padding = "10px";
list.style.width = "350px";
list.style.margin = "10px";
root.appendChild(list);

const tasks = [];
let count = 0;

// Load tasks into the list, add check and delete
function loadTask() {
    list.innerHTML = "";
    for (const taskElement of tasks) {
        const li = document.createElement("li");
        //styling
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.backgroundColor = "#fff";
        li.style.borderRadius = "5px";
        li.style.border = "2px solid black";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.style.marginRight = "10px";
        check.addEventListener("change", () => {
            if (check.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
                taskText.style.color = "black";
            }
        });

        //a span to hold the counted tasks
        const taskText = document.createElement("span");
        taskText.textContent = taskElement;
        taskText.style.paddingRight="80px";
        taskText.style.paddingLeft="30px"
        taskText.style.fontWeight="bold";
        taskText.style.color = "black";

        // Create a delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        //styling
        delBtn.type = "button";
        delBtn.style.padding = "5px 10px";
        delBtn.style.borderRadius = "3px";
        delBtn.style.border = "none";
        delBtn.style.backgroundColor ="#aa9c9cff";
        delBtn.style.color = "#fff";
        delBtn.style.cursor = "pointer";

        // Delete task
        delBtn.addEventListener("click", () => {
            const taskIndex = tasks.indexOf(taskElement);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
            }
            li.remove();
            updateCounter();
        });

        // Add components to the list element
        li.append(check, taskText, delBtn);
        list.appendChild(li);
    }
}

// Create an element to display the tasks with inline styling
const counter = document.createElement("p");
//styling
counter.innerText = `Total Tasks: ${count}`;
counter.style.textAlign = "center";
counter.style.fontWeight = "bold";
counter.style.color = "white";
root.appendChild(counter);

// Check if there is a value inside the task bar
function checkTask() {
    const taskName = task.value.trim();
    if (!taskName) {
        // Check if there's a task inside the input
        alert("Please Enter Task");
        return;
    } else {
        // Add task to the list and update the counter
        tasks.push(taskName);
        count++;
        updateCounter();
        console.log(tasks);
        task.value = "";//clearing the taskbox after entering the task
        loadTask();
    }
}

// Update the counter
function updateCounter() {
    counter.innerText = `Total Tasks: ${tasks.length}`;
}

// Button to add a task to the list
submit.addEventListener("click", () => {
    checkTask();
});
