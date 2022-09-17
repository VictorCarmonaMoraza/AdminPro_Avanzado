import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() {
    console.log('Settings Service init');
    //leemos del localStorage
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linkTheme?.setAttribute('href', url);
  }

  //Metodo para cambiar el tema
  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    //Esto es de vanilla jascript, sustituye el atributo href por el que tenemos
    this.linkTheme?.setAttribute('href', url);
    //Para que cuando recarguemos no nos modifique el tema que habiamos seleccionado lo guardemos el localstorage
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }


  checkCurrentTheme(): void {
    //Obtenemos todos los elementos con la clase selector
    const links = document.querySelectorAll('.selector');
    //Recorremos todos los elementos html
    links.forEach(elem => {
      //Borramos la clase working de los elementos
      elem.classList.remove('working');
      //Obtengo el tema seleccionado mediante su atributo
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
    //console.log(links);
  }
}
