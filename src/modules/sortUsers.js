import { render } from "./render";

export const sortUsers = () => {
    const teaderSortIsChildren = document.getElementById("sort-is-children");

    let isSort = false;

    teaderSortIsChildren.style.cursor = "pointer";

    const sortFunc = () => {
        isSort = !isSort;

        userService
            .getSortUsers({
                name: "children",
                value: isSort ? "asc" : "desc",
            })
            .then((users) => {
                render(users);
            });
    };

    teaderSortIsChildren.addEventListener("click", sortFunc);
};
