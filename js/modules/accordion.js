export default class initAccordion {
  constructor (list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //aciona os eventos ao accordin
  addAccordionEvent ( ) {
    accordionList.forEach((item) => {
      item.addEventListener('click',  ( ) => this.toggleAccordion(item));
    });
  }

//Iniciar Funçao 

  init ( ) {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent ( );
    }
    return this;
  }
}
