const val = document.getElementById("tablica");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const div = document.createElement('div')
        div.textContent = i * j;
        div.classList.add('grid-style');
        val.append(div);

        if (i === 1 || j === 1) {
            div.classList.add('blue-diagonal');
        } else if (i === j) {
            div.classList.add('green');
        } else if (i > j) {
            div.classList.add('blue');
        } else {
            div.classList.add('cabbage');
        }
    }
}