import { render } from "./render";

export const editUsers = () => {
    const tbody = document.querySelector("#table-body");
    const form = document.getElementById("form");
    const inputName = document.querySelector("#form-name");
    const inputEmail = document.querySelector("#form-email");
    const inputChildren = document.querySelector("#form-children");

    const editUserFunc = (e) => {
        if (e.target.closest(".btn-edit")) {
            const tr = e.target.closest("tr");
            const id = tr.dataset.key;

            userService.getUser(id).then((user) => {
                inputName.value = user.name;
                inputEmail.value = user.email;
                inputChildren.checked = user.children;

                form.dataset.method = id;
            });
        }
    };

    const editSendData = (e) => {
        e.preventDefault();
        if (form.dataset.method) {
            const user = {
                name: inputName.value,
                email: inputEmail.value,
                children: inputChildren.checked,
                permissions: false,
            };

            userService.editUser(form.dataset.method, user).then(() => {
                userService.getUsers().then((users) => {
                    render(users);
                    form.reset();
                    form.removeAttribute("data-method");
                });
            });
        }
    };

    form.addEventListener("submit", editSendData);
    tbody.addEventListener("click", editUserFunc);
};
