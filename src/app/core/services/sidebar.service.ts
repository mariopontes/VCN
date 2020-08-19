import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    toggled = false;
    _hasBackgroundImage = true;
    menus = [
        // {
        //     title: 'general',
        //     type: 'header'
        // },
        {
            title: 'Home',
            icon: 'fas fa-home',
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
            icon: 'far fa-credit-card',
            active: false,
            type: 'dropdown',
            submenus: [
                {
                    title: ' Cartão',
                    url: '/pedidos/cartao'
                },
                {
                    title: 'Solicitar Carga',
                    url: '/pedidos/carga'
                },
                {
                    title: 'Transferencia entre cartões',
                    url: '/pedidos/transferencia-entre-cartoes'
                },
                {
                    title: 'Bloqueio de Cartão',
                    url: '/pedidos/bloqueio'
                },
                {
                    title: 'Desbloqueio de Cartão',
                    url: '/pedidos/desbloqueio'
                },
                {
                    title: 'BlackList - Remover Cartão',
                    url: '/pedidos/blacklist'
                },
            ]
        },
        {
            title: 'Consultas',
            icon: 'fas fa-search',
            active: false,
            type: 'dropdown',
            submenus: [
                {
                    title: 'Saldo',
                    url: '/consulta/saldo'
                },
                {
                    title: 'Extrato',
                    url: '/consulta/extrato'
                }
            ]
        },
        {
            title: 'Relatórios',
            icon: 'fas fa-file-alt',
            active: false,
            type: 'dropdown',
            submenus: [
                {
                    title: 'Transações',
                    url: '/relatorios/transacoes'
                },
                {
                    title: 'Crédito',
                    url: '/relatorios/credito'
                },
                {
                    title: 'Emissões',
                    url: '/relatorios/emissoes'
                },
                {
                    title: 'Verba',
                    url: '/relatorios/verba'
                }
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
