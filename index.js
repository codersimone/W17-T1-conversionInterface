document.querySelector('button').addEventListener('click', getTextFromInput); //создаю событие нажатия на кнопку и получения строки с текстом от пользователя

function getTextFromInput() { 
    let userFullName = document.querySelector('.userDetails').value; //записываю в переменную полученную строку
    let allLettersSmall = userFullName.toLowerCase(); //преобразовываю текст, чтобы все буквы были строчными
    let result = stringToArray(allLettersSmall); // записываю преобразованный из строки массив(функция stringToArray) c преобразованными буквами в строчные (переменная allLettersSmall) в переменную результата
    result = result.map(element => capitalLetters(element)); //перписываю значение переменной и выбираю метод сортировки массива map, тк этот метод перебирает все элементы массива и создает новый массив с результатом вызова созданной мной функции (capitalLetters(str))
    document.querySelector('.outSurname').innerHTML = 'Фамилия: ' + result[0]; //разношу результат по 3м дивам
    document.querySelector('.outName').innerHTML = 'Имя: ' + result[1];
    document.querySelector('.outPatronymic').innerHTML = 'Отчество: ' + result[2];
    return userFullName; //возвращаю результат всех действий и завершаю работу функции
}

function stringToArray(string) {
    let arr = string.trim().split(" "); //преобразовываю строку в массив и удаляю лишние пробелы 
    arr = arr.filter(element => element != ""); //методом filter проверяю элементы массива, чтобы они не были пустой строкой
    return arr;
}

function capitalLetters(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}) //функция преобразования первых букв каждого слова в заглавные 
}
