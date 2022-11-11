/*-------------
    VUE
-------------*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: 'Hello Everybody!',
            photo:'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/01/english-greetings.jpg'
        }
    }
}).mount('#app');

//BONUS Aggiungere alla pagina un’immagine, presa anch’essa da un data