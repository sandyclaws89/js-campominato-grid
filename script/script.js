const container = document.getElementById('output');
let playButton = document.getElementById('button');
let selectedElement = document.getElementById('select_difficult');

playButton.addEventListener('click', play);

// for (i=1; i<=100; i++) {
//     container.innerHTML += `<div class=box>${i}</div>`
// }
function play(){
    let selectDifficult = selectedElement.value;
    if (selectDifficult == "easy"){
        for (i=1; i<=49; i++) {
           container.innerHTML += `<div class=box>${i}</div>`
        }
        console.log("ciao");
    } else if(selectDifficult == "medium"){
        for (i=1; i<=81; i++) {
            container.innerHTML += `<div class=box>${i}</div>`
        }
        console.log("rete");
    }
    else if (selectDifficult == "hard"){
        for (i=1; i<=100; i++) {
            container.innerHTML += `<div class=box>${i}</div>`
        }
        console.log("cane");
    }
}