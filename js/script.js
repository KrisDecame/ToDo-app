export const createNote = (text) => {
    return new Promise((resolve) => {
        const noteHtml = `
            <div class="note">
                <p class="note-paragaph">${text}</p>
                <div class="buttons-div">
                    <button class="delete-button">X</button>
                    <button class="done-button">Done</button>
                </div>
            </div>`

        resolve(noteHtml)
    })
}

export const noteActions = (notes) => {
    for (const note of notes) {
        note.addEventListener('click', (e) => {
            if (e.target.matches('.delete-button')) {
                note.remove();
            }
            if (e.target.matches('.done-button')) {
                note.classList.toggle('done');
            }
        })
    }
}

export const clearElementContent = element => {
    element.innerHTML = '';
}

export const printApp = (outputElement) => {
    
    const appHTML = `
        <div class="app">
            <h1>To-Do List</h1>
            <input name="text-input" placeholder="just holding place" id="text-input" autocomplete="off">
            <input type="button" id="submit-button" value="Submit">
            <button class="clear-button">Clear List</button>
            <div class="output-div"></div>
        </div>`
    
    outputElement.innerHTML = appHTML;
}