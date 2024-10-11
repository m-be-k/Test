const val = document.getElementById("table");
let matrix = [];
//mouseenter - вхождение мышки в елемент
//mouseleave - выход мышки из элемента
for (let i = 1; i <= 10; i++) {
    matrix[i-1] = [];
    for (let j = 1; j <= 10; j++) {
        const div = document.createElement('div');
        matrix[i-1][j-1]= div;
        div.val = {
            i:i-1,
            j:j-1
        }
        // div.onclick = () =>{
        //     console.log(div.val);
        //     console.log(matrix[0][j-1]);
        //     console.log(matrix[i-1][0]);
        // }

        div.textContent = i * j;
        div.classList.add('grid-style');
        val.append(div);
        div.onmouseenter = () => {
            div.classList.add('white');
            matrix[0][j-1].classList.add('white');
            matrix[i-1][0].classList.add('white');
        }
        div.onmouseleave = () => {
            div.classList.remove('white');
            matrix[0][j-1].classList.remove('white');
            matrix[i-1][0].classList.remove('white');
        }
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
console.log(matrix);
// при выделение курсора мыши подсвечивается сам блок на котором курсор мыши и его координаты.
// То есть нужен алгарит для координата i и j в котороем есть у меня в условий.
// 1. Могу использовать свое условие для взаимодествие с координатами(i&j).
// 2. возможно что бы отображались i&j то есть наши координаты, можно добавить в обробочик события.
// 3. то есть для каждой ячеки сделать событие i&j.
// 4. что если добавить блок в html например div или p условно. Добавить для него айди (контейнер).
// и в js прописать const cont = document.getElementById('контейнер');
//  где cont.textContent = пропишем наши координаты для каждого по одельности  i , j. то есть,
// 5.что если использвать этот код только для координатов i&j?
// div.onmouseenter = () => {
//             div.classList.add('white');
//         }
//         div.onmouseleave = () => {
//             div.classList.remove('white');
//         }
// 6. может использовать div.textContent как переменную в которой будут содержатся i & j. для того что бы
// то есть додим какую нибудь переменную нашим i * j.
// 7 тогда при новедений мы показываем координаты  div.textContend = "i,j".
// div.onmouseenter = () => {
//             div.textContend = ('${i}','${j}');
// а при уходе курсора мыши возвращаем в исходное положение
// div.onmouseleave = () => {
//             div.textContend = '';
//         }

// 6.1. в цикле создаю много div. если хочу сохранить каждый div мне нужно записать их в массив
// 6.2 что бы записать в массив все для начало нужно его объявить.
// 6.3 перебираемся все div в цикле
// 6.4 сох нашу переменную div
// 6.5 div мы сохраняем в массив через push.
// 6.6 и добавляем div на строницу
// 6.7 добавить цвет в див.
// 6.8 получается нужно теперь обратиться к краям i и j .
// можно сделать через условие
//            if (i === 1 || j === 1) {
//             div.classList.add('blue-diagonal');
//         } else if (i === j) {
//             div.classList.add('green');
//         } else if (i > j) {
//             div.classList.add('blue');
//         } else {
//             div.classList.add('cabbage');
//         }
// или через функцию обратиться к i,j через условие которое использовали ранне ,
// где мы в конце передаем функцию и применяем функцию где находтся наши (i,j).
// 6.9 может на прямую div передать (i,j)
// где наш div сохраняет i, и отдельно j.
// и в пункте 6.5 мы пушим
// и при вызове массива менять цвет.

// двухмерный массив где буду наши i , j.
// что бы сохронялись наши данные.
// нужно хранить div's целеком.

