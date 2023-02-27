window.addEventListener('load', () => {
    setTimeout(() => {
        move_pages.section_left();
    }, 4900);
});

const move_pages = {
    section_left: function() {
        document.querySelector('#container_page_logo').classList.add("move_left");
        this.two_page_settings();
    },
    two_page_settings: function() {
        typeWriter(document.querySelector('.titleMessage_twoPage'));
    },
};

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
};