import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'rental', title: 'Alugar', icon: 'pe-7s-note', class: '' },
    { path: 'clients', title: 'Criar Cliente', icon: 'pe-7s-note', class: '' },
    { path: 'listClients', title: 'Listar Clientes ', icon: 'pe-7s-users', class: '' },
    { path: 'agency', title: 'Criar Agência', icon: 'pe-7s-note', class: '' },
    { path: 'listAgency', title: 'Listar Agências ', icon: 'pe-7s-home', class: '' },
    { path: 'cars', title: 'Registrar Carro', icon: 'pe-7s-note', class: '' },
    { path: 'listCars', title: 'Listar Carros', icon: 'pe-7s-car', class: '' },
    { path: 'employers', title: 'Registrar Funcionario', icon: 'pe-7s-note', class: '' },
    { path: 'listEmployers', title: 'Listar Funcionario', icon: 'pe-7s-users', class: '' },

    // { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    // { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    // { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    // { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    // { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    // { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    menuItems: any[];
    user: any;
    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("employeeLogin"));
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    isEmployee() {
        if (this.user.cargo === 2) {
            return true
        }else{

            return false
        }
    }
}
