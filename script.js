function userDialog() {
    alert("Привітик! Тут ти дізнаєшся більше про нашу книгарню-кав'ярню.");

    let name = prompt("Введіть ваше ім'я:");
    if (!name) {
        alert("Ім'я не введено.");
        return;
    }
     
    let age = prompt("Скільки Вам років", 18);
    alert(`Вам ${age} років!`); 

    age = Number(age);
    if (age < 18) {
        alert("Вам ще немає 18 років.");
    } else {
        alert("Ви повнолітній.");
    }

    let wantsToContinue = confirm("Бажаєте продовжити?");
    while (!wantsToContinue) {
        wantsToContinue = confirm("Можливо, все ж таки продовжимо?");
    }

    alert(`Дякуємо, ${name}, що залишаєтесь з нами!`);

}

function showDeveloperInfo(surname, name, posada = "Студентка") {
    alert(`Розробник сторінки:\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${posada}`);
}

function compareBooks(title1, title2) {
    if (title1 > title2) {
        alert(`Книга з "більшою" назвою: ${title1}`);
    } else if (title1 < title2) {
        alert(`Книга з "більшою" назвою: ${title2}`);
    } else {
        alert("Назви книг однакові.");
    }
}

document.body.style.background = 'red'; 

setTimeout(() => {
    document.body.style.background = ''; 
}, 30000); 


userDialog();
showDeveloperInfo("Боднарчук", "Аліна"); 
compareBooks("Сяйво", "Воно");


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("schedule").innerHTML = "Оновлений розклад";
});

//  Використання querySelectorAll: змінити всі .highlight
const highlightedItems = document.querySelectorAll(".highlight");
highlightedItems.forEach((el, books) => {
  el.textContent = `🔸 ${el.textContent}`;
});


    