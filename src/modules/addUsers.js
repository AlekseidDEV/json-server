import { render } from "./render" //импортируем рендер для отрисовки

export const addUsers = () => {
   const form = document.getElementById('form')
   const inputName = document.querySelector('#form-name')
   const inputEmail = document.querySelector('#form-email')
   const inputChildren = document.querySelector('#form-children')
   // получаем все необходимые поля, форму

   form.addEventListener('submit', (e) => { // вешаем обработчик события
        e.preventDefault(); // убираем стандартное поведение формы

         const  user = {
            name : inputName.value,
            email : inputEmail.value,
            children : inputChildren.checked,
            permissions : false
        } //создаем новый объект на основе полученных данных из формы

        userService.addUser(user).then(() => { // запускаем метод записи пользователя
            userService.getUsers().then(users => { // после добавления в базу данных, нужно получить свежие данные из бд  и как раз таки отрисовать их на странницу
               render(users)
            })
        })
   })
}