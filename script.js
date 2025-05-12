 
 
 
 /* function userDialog() {
    alert("Привітик! Тут ти дізнаєшся більше про нашу книгарню-кав'ярню.");

    let name = prompt("Введіть ваше ім'я:");
    if (!name) {
        alert("Ім'я не введено.");
        return;
    }
     
    let age = prompt("Скільки Вам років", 18);
    alert(Вам ${age} років!); 

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
    alert(Дякуємо, ${name}, що залишаєтесь з нами!);

}

function showDeveloperInfo(surname, name, posada = "Студентка") {
    alert(Розробник сторінки:\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${posada});
    
}

function compareBooks(title1, title2) {
    if (title1 > title2) {
        alert(Книга з "більшою" назвою: ${title1});
    } else if (title1 < title2) {
        alert(Книга з "більшою" назвою: ${title2});
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

document.getElementById("schedule").innerHTML = "Оновлений розклад";
alert(table.outerHTML);


const highlightedItems = document.querySelectorAll(".highlight");
highlightedItems.forEach((el, books) => {
  el.textContent = `🔸 ${el.textContent}`;

}); 

*/
 
function handleClickAttr() {
    alert("Напишіть нам у приватні повідомлення в інстаграм! (через атрибут у HTML (onclick))");
}

let contactButton = document.getElementById("contactBtn");

contactButton.onclick = function () {
    alert("Напишіть нам у приватні повідомлення в інстаграм! (через властивість: button.onclick)");
};

function firstHandler() {
    alert("Напишіть нам у приватні повідомлення в інстаграм або телеграм! (через addEventListener, ПЕРШИЙ обробник)");
}

function secondHandler() {
    alert("Напишіть нам у приватні повідомлення в інстаграм або телеграм!!! (через addEventListener, ДРУГИЙ обробник)");
}

contactButton.addEventListener("click", firstHandler);
contactButton.addEventListener("click", secondHandler);

let objectHandler = {
    handleEvent(event) {
        alert("Напишіть нам у приватні повідомлення в інстаграм! (через обробник-об'єкт)");
        alert(`Елемент, на якому спрацював обробник: ${event.currentTarget}`);

    }
};
contactButton.addEventListener("click", objectHandler);

setTimeout(() => {
    contactButton.removeEventListener("click", firstHandler);
    alert("Третє повідомлення було видалено через 10 секунд");
}, 10000);


document.addEventListener('click', function (event) {
    if (event.target.dataset.counter !== undefined) {
        event.target.value++;
    }

    const toggleId = event.target.dataset.toggleId;
    if (toggleId) {
        const elem = document.getElementById(toggleId);
        if (elem) {
            elem.hidden = !elem.hidden;
        }
    }
});

