// Browser extension to create, update and delete GitHub checkbox tasks within the UI, not having to touch markdown.
// Currently there must be an existing taskList present. TODO: Be able to create taskList() from the UI too.
//
// Create: "Add new task..." at the bottom, upon enter, POST request is sent then appends "Add new task..." to list.
// Update: Double click on existing taskItem text, update text, press enter and POST request is sent.
// Delete: On hover of entire taskList, the word "delete" appears to the right, onClick, POST request is sent.

let taskLists = null;

function init() {
    let taskLists = getTaskLists();
}

init();

// get taskLists, just do one tasklist for now, just loop it when have the whole list
function getTaskLists() {

}

// copy an existing checkbox to get the <input>, and attributes of everything
function copyTaskListItem() {

}

function appendTaskListItem() {

}

function createTaskListItem() {

}

function updateTaskListItem() {

}

//
function deleteTaskListItem() {

}

// Trickiest part, potentially find library to do this.
function convertHTMLtoMarkdown() {

}

// POST request to save changes. See how current POST request is sent, mimick that.
// It already works on drag, so hijack into the drag event.
function saveChanges() {
    convertHTMLtoMarkdown();
}




// set .textContent to "Add new checkbox"

// appendElement()

// If user clicks the "Add new checkbox"





