import hamburgerMenu from './menu_hamburgesa.js';
import { digitalClock } from './reloj.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
     hamburgerMenu('.panel-btn', '.panel', '.menu a');
     digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
});


