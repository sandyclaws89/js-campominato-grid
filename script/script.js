const container = document.getElementById('output');

for (i=1; i<=100; i++) {
    container.innerHTML += `<div class=box>${i}</div>`
}