export const debounce = (func, ms = 500) => {
    let timeOut;

    return () => {
        clearTimeout(timeOut);
        timeOut = setTimeout(func, ms);
    };
};
