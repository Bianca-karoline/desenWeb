function tabuada(){
    let x = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultab');
    for(let i = 0; i <=10; i++){
        let t = x + ' x ' + i + ' = ' + (x * i);
        const node = document.createElement("p");
        const text = document.createTextNode(`${t}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
    
}
function impressao(){
    let num = document.getElementById('imp').value;
    let divisoria = document.getElementById('texto');
    for(let i = 0; i<num;i++){
        const node = document.createElement('h4');
        const text = document.createTextNode(`Sla`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}
let click = 0; //escopo global
function clique(){
    click++;
    document.getElementById('cliques').innerHTML = click
}
function sorte(){
    let max = parseInt(document.getElementById('max').value) ;
    let min = parseInt(document.getElementById('min').value);
    let sorteado = parseInt(Math.random() * (max - min + 1) )+min;
    document.getElementById('n').innerHTML = sorteado;
}
