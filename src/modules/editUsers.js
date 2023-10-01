import { render } from "./render"

export const editUsers = () => {
    const tbody = document.querySelector('#table-body')
    const form = document.getElementById('form')
    const inputName = document.querySelector('#form-name')
    const inputEmail = document.querySelector('#form-email')
    const inputChildren = document.querySelector('#form-children')

    const editUserFunc = (e) => {  
        if(e.target.closest('.btn-edit')){
            const tr = e.target.closest('tr') // получаю строку где был произведен клик на инпут
            const id = tr.dataset.key // получаю ключ

            userService.getUser(id).then(user => { // здесь я получаю старые данные пользователя по его айдишнику, и занашу их в форму, для дальнейшей редакции
                inputName.value = user.name
                inputEmail.value = user.email
                inputChildren.checked = user.children

                form.dataset.method = id // добавляю дата атрибут, который будет равен айдишнику (ключу)
            })
         }
    }   

    const editSendData = (e) => {
        e.preventDefault(); // убираем стандартное поведение формы
        if(form.dataset.method){ //проверяем значение, что бы при редактировании пользователя, не сделать POST запрос 
           const  user = {
              name : inputName.value,
              email : inputEmail.value,
              children : inputChildren.checked,
              permissions : false
          } //создаем новый объект на основе полученных данных из формы
          
          userService.editUser(form.dataset.method ,user).then(() => { // запускаем метод перезаписи, и туда передаем дата атрибут и новый объект юзера. В метод PUT передается сразу новый объект, ибо этот метод затирает полностью старые данные, и заносит новые
              userService.getUsers().then(users => { // после добавления в базу данных, нужно получить свежие данные из бд  и как раз таки отрисовать их на странницу
                 render(users)
                 form.reset() // отчистка формы
                 form.removeAttribute('data-method')
              })
          })
        }
    }

    form.addEventListener('submit' , editSendData) // вешаем обработчик события
    tbody.addEventListener('click' , editUserFunc) 
}