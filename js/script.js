import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';  
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import menuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import dropdownMenu from './modules/dropdown-menu.js';


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

const scrollAnima= new ScrollAnima ('');
scrollAnima.init ('[data-anime="scroll"]');

const dropdownMenu = new DropdownMenu ('');
dropdownMenu.init ('[data-dropdown]');

const menuMobile = new MenuMobile ('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init( ) ;


const funcionamento = new Funcionamento ('[data-semana]', 'aberto');
funcionamento.init ( );

fetchAnimais ('../../animaisapi.json', '.numeors-grid');
fetchBitcoin ('https://blockchain.info/ticker', '.btc-preco');  