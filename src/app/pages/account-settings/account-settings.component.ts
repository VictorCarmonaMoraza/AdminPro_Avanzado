import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  public linkTheme = document.querySelector('#theme');
  //Obtenemos todos los elementos con la clase selector
  public links!:NodeListOf<Element>;


  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;

    //Esto es de vanilla jascript, sustituye el atributo href por el que tenemos
    this.linkTheme?.setAttribute('href',url);

    //Para que cuando recarguemos no nos modifique el tema que habiamos seleccionado lo guardemos el localstorage
    localStorage.setItem('theme',url);

    this.checkCurrentTheme();
    //console.log(url);
  }

  checkCurrentTheme():void{
    //Recorremos todos los elementos html
    this.links.forEach(elem=>{
      //Borramos la clase working de los elementos
      elem.classList.remove('working');
      //Obtengo el tema seleccionado mediante su atributo
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl===currentTheme){
        elem.classList.add('working');
      }
    });
    //console.log(links);

  }

}
