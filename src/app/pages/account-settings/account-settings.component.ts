import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {


    const url = `./assets/css/colors/${theme}.css`;

    //Esto es de vanilla jascript, sustituye el atributo href por el que tenemos
    this.linkTheme?.setAttribute('href', url);

    //Para que cuando recarguemos no nos modifique el tema que habiamos seleccionado lo guardemos el localstorage
    localStorage.setItem('theme', url);

    console.log(url);
  }

}
