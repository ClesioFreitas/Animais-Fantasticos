export default class ScrollAnima {
  constructor (sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind ( this);
  }
  
  //Pega  a distancia de cada item em relação ao topo do site
  gitDistance( ) {
    this.distance = [...this.sections].map((sections) => {
      const offset =sections.offsetTop;
      return {
        element:section,
        offset:  Math.floor(offset - this.windowMetade),
      };
    });
  }

  //Verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance ( ) {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

 
  init ( ) {
    if (this.sections.length) {
      this.gitDistance( ) ;
      this.checkDistance () ;
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
  
  //Remove o evente de scroll
  stop () {
    this.window.removeEventListener('scroll', this.checkDistance);
  }
}
