import { createNote, noteActions, clearElementContent, printApp } from "./script.js";

export const main = () => {
    let wrapper = document.querySelector('.wrapper');
    let appButton = document.querySelector('.app-button');
    let textInputValue;
    let submitButton;
    let outputDiv;
    let clearButton;
    
    appButton.addEventListener('click', () => {
        if (wrapper.innerHTML === '') {
            printApp(wrapper);
            textInputValue = document.getElementById('text-input');
            submitButton = document.getElementById('submit-button');
            outputDiv = document.querySelector('.output-div');
            clearButton = document.querySelector('.clear-button');
    
            submitButton.addEventListener('click', async (e) => {
                let value = textInputValue.value.trim();
        
                if (value === null || value === '') {
                    return;
                } else {
                    outputDiv.innerHTML += await createNote(value);
                    textInputValue.value = '';
                }
                const notes = document.querySelectorAll('.note');
                noteActions(notes);
            });
            
            clearButton.addEventListener('click', () => {
                clearElementContent(outputDiv);
            })
        } else {
            wrapper.innerHTML = '';
        }
    })
    

}