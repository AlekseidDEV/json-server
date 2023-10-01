import { render } from "./render";

export const changePermissons = () => {
    const tbody = document.querySelector("#table-body");

    const permissionUserFunc = (e) => {
        if (e.target.closest("input[type=checkbox]")) {
            const tr = e.target.closest("tr");
            const input = tr.querySelector("input[type=checkbox]");
            const id = tr.dataset.key;

            userService
                .changeUser(id, { permissions: input.checked })
                .then(() => {
                    userService.getUsers().then((users) => {
                        render(users);
                    });
                });
        }
    };

    tbody.addEventListener("click", permissionUserFunc);
};
