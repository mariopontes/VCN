import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    toggled = false;
    _hasBackgroundImage = true;
    menus = [
        {
            title: 'general',
            type: 'header'
        },
        {
            title: 'Home',
            icon: 'fa fa-tachometer-alt',
            active: false,
            type: 'simple',
            url: '/home'
            // badge: {
            //     text: 'New ',
            //     class: 'badge-warning'
            // },
        },
        {
            title: 'Pedidos',
            icon: 'far fa-gem',
            active: false,
            type: 'dropdown',
            submenus: [
                {
                    title: 'Solicitar Cartão',
                    url: '/relatorios'
                },
                {
                    title: 'Solicitar Cartão + Carga',
                    url: '/pedidos'
                },
                {
                    title: 'Solicitar Carga',
                    url: '/pedidos'
                },
                {
                    title: 'Consulta',
                    url: '/pedidos'
                },
            ]
        }
    ];
    constructor() { }

    toggle() {
        this.toggled = !this.toggled;
    }

    getSidebarState() {
        return this.toggled;
    }

    setSidebarState(state: boolean) {
        this.toggled = state;
    }

    getMenuList() {
        return this.menus;
    }

    get hasBackgroundImage() {
        return this._hasBackgroundImage;
    }

    set hasBackgroundImage(hasBackgroundImage) {
        this._hasBackgroundImage = hasBackgroundImage;
    }
}
