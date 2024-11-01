const circle = document.getElementById('circle');

function moveCircle(event) {

    circle.style.top = `${event.clientY - 8}px`; 
    circle.style.left = `${event.clientX - 8}px`; 
}

window.addEventListener('mousemove', moveCircle);
