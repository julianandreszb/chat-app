document.querySelectorAll('.collapsible').forEach(element => {
    if (element.dataset?.collapsibleTarget) {
        const collapsibleTarget = document.getElementById(element.dataset.collapsibleTarget);
        element.addEventListener('click', () => {
            collapsibleTarget.classList.toggle('collapsible-content--expanded');
        });
    }
});