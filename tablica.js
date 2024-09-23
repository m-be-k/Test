const taible = document.getElementById("tablica");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const div = document.createElement('div')
        div.textContent = i * j;
        taible.append(div);
        // div.setAttribute('class', 'grid-stile');
        // if (i === j) {
        //     div.setAttribute('class', 'diagonal');
        // }
        // if (i === 1 || j === 1) {
        //     div.setAttribute('class', 'blue');
        // }
        // if( i>j){
        //     div.setAttribute('class','red');
        //
        // }
        if (i === 1||j===1) {
            div.classList.add('diagonal');
        }
        else if(i===j){
            div.classList.add('blue');
        }
        else if (i>j){
            div.classList.add('red');
        }
        else {
            div.classList.add('orange');
        }
    }
}