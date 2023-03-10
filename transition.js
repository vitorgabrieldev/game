window.addEventListener('load', () => {
    if(!localStorage.getItem('enterGame')) {
        localStorage.setItem('enterGame','1');
        setTimeout(() => {
            move_pages.section_left();
        }, 4900);
    } else {
        document.querySelector('#container_page_logo').classList.add("move_left");
        document.querySelector('#container_page_messages_alert').classList.add("move_left");
    };
});
const move_pages = {
    section_left: function() {
        document.querySelector('#container_page_logo').classList.add("move_left");
        this.two_page_settings();
    },
    two_page_settings: function() {
        typeWriter(document.querySelector('.titleMessage_twoPage'));
        setTimeout(() => {
            document.querySelector('#container_page_messages_alert').classList.add("move_left");
            this.section_right();
        }, 8000);
    },
};
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
};
function enterMouseButton(txt) {
    document.querySelector('.titleOPtionHover').innerHTML = txt;
};
function redirectNewPlayer() {
    window.location.href = "./new_player.html";
};