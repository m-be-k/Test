const taible = document.getElementById("tablica");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const div = document.createElement('div')
        div.textContent = i * j;
        taible.append(div);
        div.setAttribute('class','grid-stile');
    }
}