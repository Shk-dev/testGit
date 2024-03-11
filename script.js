let clone = document.querySelector('h2')

function newString(){
        clone.innerHTML = 'Git test result: successful';
        console.log('Hello Git <3');
}

setTimeout(newString, 3000)
