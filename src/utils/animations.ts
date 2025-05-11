// Placeholder for animation utility functions
// e.g., fade-in, slide-in, etc. using a library or custom CSS transitions

export const fadeIn = (element: HTMLElement, duration: number = 300) => {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    setTimeout(() => {
        element.style.opacity = '1';
    }, 50); // Small delay to ensure transition applies
};

export const fadeOut = (element: HTMLElement, duration: number = 300) => {
    if (!element) return;
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    setTimeout(() => {
        element.style.opacity = '0';
    }, 50);
}; 