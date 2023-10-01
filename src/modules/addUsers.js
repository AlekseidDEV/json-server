import { render } from "./render" //импортируем рендер для отрисовки

export const addUsers = () => {
   const form = document.getElementById('form')
   const inputName = document.querySelector('#form-name')
   const inputEmail = document.querySelector('#form-email')
   const inputChildren = document.querySelector('#form-children')
   // получаем все необходимые поля, форму

   const addUserFunc = (e) => {
      e.preventDefault(); // убираем стандартное поведение формы
      if(!form.dataset.method){ //проверяем значение, что бы при редактировании пользователя, не сделать POST запрос 
         const  user = {
            name : inputName.value,
            email : inputEmail.value,
            children : inputChildren.checked,
            permissions : false
        } //создаем новый объект на основе полученных данных из формы

        userService.addUser(user).then(() => { // запускаем метод записи пользователя
            userService.getUsers().then(users => { // после добавления в базу данных, нужно получить свежие данные из бд  и как раз таки отрисовать их на странницу
               render(users)
               form.reset()
            })
        })
      }
   }

   form.addEventListener('submit', addUserFunc ) // вешаем обработчик события


}