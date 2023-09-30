export const addUsers = () => {
   const form = document.querySelector('form')
   const inputName = document.querySelector('#form-name')
   const inputEmail = document.querySelector('#form-email')
   const inputChildren = document.querySelector('#form-children')

   form.addEventListener('submit', (e) => {
        e.preventDefault()
        

        const user = {
            name : inputName.value,
            email : inputEmail.value,
            children : inputChildren.checked,
            permissions : false
        }

        userService.addUser(user)
        // userService.addUser(user).then((data) => console.log(data))
   })
}