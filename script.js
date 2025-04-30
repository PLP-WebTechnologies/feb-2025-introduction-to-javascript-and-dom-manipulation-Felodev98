document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');

    // Function to change the text content
    function changeText() {
        dynamicTextElement.textContent = 'The text has been dynamically changed!';
    }

    // Function to modify CSS styles
    function changeStyle() {
        dynamicTextElement.classList.toggle('styled'); // Toggles a CSS class
    }

    // Function to add a new element
    function addElement() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new paragraph added dynamically.';
        newParagraph.classList.add('new-element');
        elementContainer.appendChild(newParagraph);
    }

    // Function to remove an element
    function removeElement() {
        const removableElement = document.querySelector('.removable');
        if (removableElement) {
            elementContainer.removeChild(removableElement);
        } else {
            alert('No more elements with the class "removable" to remove!');
        }
    }

    // Event listeners for user interactions
    setTimeout(changeText, 2000); // Change text after 2 seconds
    styleButton.addEventListener('click', changeStyle);
    addElementButton.addEventListener('click', addElement);
    removeElementButton.addEventListener('click', removeElement);
});