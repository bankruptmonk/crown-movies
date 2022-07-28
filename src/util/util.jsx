export const focusElement = (reference, scroll = true) => {
    reference.current.tabIndex = -1;
    reference.current.focus();
    reference.current.removeAttribute('tabIndex');
    scroll && reference.current.scrollIntoView({ behavior: 'smooth' });
};