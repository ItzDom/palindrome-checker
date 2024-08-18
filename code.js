let button = document.querySelector('#checkBtn');  // Changed from 'checkBtn' to '#checkBtn'
let message = document.querySelector('.message');
let container = document.querySelector('main');

button.addEventListener('click', () => {
    let text = document.getElementById('textbox').value;
    
    // Reverse the text correctly
    let reverse = text.split('').reverse().join('');

    // Process forward and backward strings
    let forward = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    let backward = reverse.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if text is empty
    if (text === '') {
        alert('Write something in the text box.');
    } else {
        // Check for palindrome
        if (forward === backward) {
            message.innerHTML = "Yes, it is a Palindrome!";
            message.classList.add('correct');
            message.classList.remove('wrong');
            container.style.height = '390px';
        } else {
            message.innerHTML = "No, it is not a Palindrome.";
            message.classList.add('wrong');
            message.classList.remove('correct');
            container.style.height = '390px';
        }
    }
});

