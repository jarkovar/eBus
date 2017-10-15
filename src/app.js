import {Linka} from './linka';

export class App{
  constructor() {
    this.welcome = "Vítejte v aplikaci eBus, která Vám ušetří stres z přecpaných autobusů";
    this.busLinka = "Autobus MHD - Linka 11";
    this.linkas = [];
    this.linkaDescription = '';
    //this.DJKP = "2017 by DJKP Team";
  }

  addLinka() {
    if (this.linkaDescription) {
      this.linkas.push(new Linka(this.linkaDescription));
      this.linkaDescription = '';
    }
  }

  removeLinka(linka) {
    let index = this.linkas.indexOf(linka);
    if (index !== -1) {
      this.linkas.splice(index, 1);
    }
  }
}
