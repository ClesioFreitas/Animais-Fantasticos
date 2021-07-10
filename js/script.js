import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';  // vamos pular esse por enquanto 
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave ('[data-menu="suave"] a[hre^="#"]');
scrollSuave.init( );

const accordion = new Accordion ('[data-anime="accordion"] dt') ;
accordion.init ( );

const tabNav = new TabNav ( '[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init ( );


const modal = new Modal ( '[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
Modal.init ( );
 
const tooltip= new Tooltip ('[data-tooltip]');
tooltip.init ( );

initAnimacaoScroll(); // vamos pular esse por enquanto 
initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais ('../../animaisapi.json', '.numeors-grid');
fetchBitcoin ('https://blockchain.info/ticker', '.btc-preco'); 