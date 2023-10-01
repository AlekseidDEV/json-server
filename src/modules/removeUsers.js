import { render } from "./render";

export const removeUsers = () => {
    const tbody = document.querySelector("#table-body");

    const removeUserFunc = (e) => {
        if (e.target.closest(".btn-danger")) {
            const tr = e.target.closest("tr");
            const id = tr.dataset.key;

            userService.removeUser(id).then(() => {
                userService.getUsers().then((users) => {
                    render(users);
                });
            });
        }
    };

    tbody.addEventListener("click", removeUserFunc);
};
