const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const textChangable = document.getElementById('to-change');
const image = document.getElementById('image');

let textArray = [
    "Прошу тебя прочесть это сообщение<br>Я не хочу, чтобы ты о чем-то жалела", 
    "Текст 2", 
    "Текст 3", 
    "На последней странице изображен самый милый и красивый котик в этой вселенной<br>Нажимай дальше", 
    "А вот и тот самый котик 👉👈"
];

let counter = 0;

// Функция для обновления состояния кнопок и текста
function updatePage() {
    // Меняем текст (используем innerHTML для поддержки <br>)
    textChangable.innerHTML = textArray[counter];

    // Скрываем или показываем кнопку "Назад"
    if (counter == 0) {
        previousBtn.style.display = "none";
    } else {
        previousBtn.style.display = "inline"; // или "inline-block", в зависимости от ваших стилей
    }
    
    // (Опционально) Скрываем кнопку "Далее" на последнем слайде
    if (counter === textArray.length - 1) {
        nextBtn.style.display = "none";
        image.style.display = "inline-block";
        
    } else {
        nextBtn.style.display = "inline-block";
        image.style.display = "none";
    }
}

function nextPage() {
    // Проверяем, чтобы не выйти за границы массива
    if (counter < textArray.length - 1) {
        counter++;
        updatePage();
    }
}

function prevPage() {
    // Проверяем, чтобы не уйти в минус
    if (counter > 0) {
        counter--;
        updatePage();
    }
}

// Передаем ссылки на функции БЕЗ скобок
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", prevPage);

// Инициализируем страницу при загрузке
updatePage();