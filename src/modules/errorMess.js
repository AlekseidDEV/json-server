export const errorMessFunc = (error) => {
    const errorText = document.querySelector(".text_error");

    if (error) {
        errorText.style.display = "block";
    } else {
        errorText.style.display = "none";
    }
};
