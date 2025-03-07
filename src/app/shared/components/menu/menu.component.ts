import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

public menuItems: MenuItem[] = [];

ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [{
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: '/numbers'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                  routerLink: '/uncommon'
              }
            ]
        },
        {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [{
                    label: 'Custom pipes',
                    icon: 'pi pi-fw pi-refresh',
                    routerLink: '/custom'
                },
                {
                    label: 'Redo',
                    icon: 'pi pi-fw pi-repeat'
                }
            ]
        }
    ];
  }
}
