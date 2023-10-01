import { render } from "./render";

export const addUsers = () => {
    const form = document.getElementById("form");
    const inputName = document.querySelector("#form-name");
    const inputEmail = document.querySelector("#form-email");
    const inputChildren = document.querySelector("#form-children");

    const addUserFunc = (e) => {
        e.preventDefault();
        if (!form.dataset.method) {
            const user = {
                name: inputName.value,
                email: inputEmail.value,
                children: inputChildren.checked,
                permissions: false,
            };

            userService.addUser(user).then(() => {
                userService.getUsers().then((users) => {
                    render(users);
                    form.reset();
                });
            });
        }
    };

    form.addEventListener("submit", addUserFunc);
};
