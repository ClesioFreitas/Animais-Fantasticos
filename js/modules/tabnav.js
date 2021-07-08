export default  class TabNav {
  constructor ( menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
   this.tabContent = document.querySelectorAll(content);
   this.activeClass = 'ativo'
  }

  // ativa a tab de acordoo  com  o index da mesma 
   activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = tabContent[index].dataset.anime;
   this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  //aciciona os eventos nas tabs
  addTabNavEvent ( ) {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', ( ) => this.activeTab (index));
        activeTab(index);
   });
}

  init ( ) {
    if  (this.tabMenu.length && this.tabContent.length) {
      // ativar primerio item
      this.activeTab(0);
      this.addTabNavEvent ( ) ;
      }
    }
}

