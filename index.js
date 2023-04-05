const input = document.getElementById('button');

function addingEventListener() {
    alert('I was clicked');

input.addEventListener('click', clickAlert);
}

function clickAlert() {
    alert('I was clicked');
}