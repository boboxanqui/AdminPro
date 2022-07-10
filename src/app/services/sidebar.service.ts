import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any[] = [
    {
      titulo: 'Dahsboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'PrgoressBar', url: 'progress'},
        { titulo: 'Gráficas', url: 'grafica1'}
      ]
    }
  ]

}
