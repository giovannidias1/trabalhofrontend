import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      dataDevolucao: {
        title: 'Data devolução'
      },
      dataLocacao: {
        title: 'Data locação'
      },
      cliente: {
        title: 'Cliente',
        valuePrepareFunction: (cliente) => {
          return cliente.nome;
        }
      },

      carro: {
        title: 'Carro',
        valuePrepareFunction: (carro) => {
          return carro.montadora + ' - ' + carro.modelo;
        }
      },
      realizaAluguel: {
        title: 'Funcionario',
        valuePrepareFunction: (realizaAluguel) => {
          return realizaAluguel.nome;
        }
      },



    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }

  };
  data = [];
  constructor(
    public restService: RestService,
  ) { }

  ngOnInit() {
    this.getRental();
  }

  getRental() {
    this.restService.get('aluga').subscribe(rent => {
      this.data = rent;
    });
  }

}
