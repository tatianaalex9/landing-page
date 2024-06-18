// Задание 2
const menu = document.querySelector('.menu'),
    btnMob = document.querySelector('.btn-mob'),
    spolElem = document.querySelector('.spoller__elements'),
    myBtn = document.querySelectorAll('.btn'),
    myLink = document.querySelectorAll('a'),
    myParag = document.querySelectorAll('p'),
    h1 = document.querySelector('h1'),
    h2 = document.querySelector('h2'),
    img = document.querySelector('img');

console.log(myBtn);
console.log(myLink);
console.log(myParag);
console.log(h1);
console.log(h2);
console.log(img);
    
// Задание 3 ------------------------------------------------------
myBtn[0].addEventListener('click', () => {
    myBtn[0].classList.toggle('red');
})

myBtn[2].addEventListener('click', () => {
    myBtn[2].classList.add('green');
})

myBtn[3].addEventListener('click', () => {
    myBtn[2].classList.remove('green');
})

// Задание 4 ------------------------------------------------------

function liteSpoler(e) {
    const targetElement = e.target;
    if (targetElement.closest('.spoller__name')) {
        targetElement.nextElementSibling.classList.toggle('activ');
    }
    if (targetElement.closest('.spoller__plus')) {
        targetElement.nextElementSibling.classList.toggle('activ');
    } //жму на сам "+" - ничего не происходит, почему?; жму справа от "+" - разворачивается spoller__text.
}

spolElem.addEventListener('click', liteSpoler);

btnMob.addEventListener('click', ()=> {
    menu.classList.toggle('activ');
});

// Задание 5 ------------------------------------------------------
const mainWindow = document.documentElement,//моя страница, мой документ, мой сайт
    myArticle = document.querySelector('.promo');

const mainWindowWidth = mainWindow.clientWidth,//ширина страницы
    mainWindowHeight = mainWindow.clientHeight,//высота страницы
    myArticleWidth = myArticle.clientWidth,//ширина элемента
    myArticleHeight = myArticle.clientHeight;//высота элемента

console.log(myArticle); 

console.log(`доступная ширина страницы ${mainWindowWidth}`);
console.log(`доступная высота страницы ${mainWindowHeight}`);
console.log(`доступная ширина элемента ${myArticleWidth}`);
console.log(`доступная высота элемента ${myArticleHeight}`);


const parag = document.createElement('p');
myArticle.append(parag);//куда вставить? в конец дока
parag.textContent = 'Ширина страницы'+ mainWindowWidth + 'Высота страницы'+ mainWindowHeight + 'Ширина элемента' + myArticleWidth + 'Высота элемента' + myArticleHeight;//содержание созданного элемента
parag.classList.add('red');


 // Задание 6 ------------------------------------------------------  
const myForms = document.forms;
console.log(myForms);

const logForm = myForms.loginForm;
console.log(logForm);

const listForm = logForm.elements;
console.log(logForm.first);
console.log(logForm.last);
console.log(logForm.date);
console.log(logForm.male);

const logBtn = logForm.formbtn;
console.log(logBtn);

logForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(logForm.first.value);
    console.log(logForm.last.value);
    console.log(logForm.date.value);
    console.log(logForm.male.value);
})

// Задание 7 -----------------modal window-------------------------------------  
const openModal = document.querySelector('.btnmodalwindow'),
    closeModal = document.querySelector('.btnclose'),
    modal = document.querySelector('.modal');
    
//Специальная кнопка в модальном окне   
function show() {
    modal.classList.toggle('show');
    document.body.classList.toggle('fix');
}

openModal.addEventListener('click', show);
closeModal.addEventListener('click', show);

//Нажатие клавиши ESC на клавиатуре
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.classList.remove('fix');
    }
})

//Клик мышкой за пределами модального окна
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.classList.remove('fix');
    }
})
