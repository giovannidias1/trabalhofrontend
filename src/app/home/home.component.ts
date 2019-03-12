import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DatePipe } from '@angular/common';



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
      owner: {
        title: 'Endereço',
        valuePrepareFunction: (owner) => {
          return owner.street;
        }
      },

      orderDate: {
        title: 'Data Pedido',
        valuePrepareFunction: (orderDate) => {
          const raw = new Date(orderDate);
          const formatted = this.datePipe.transform(raw, 'dd/MM/yyyy');
          return formatted;
        }
      },
      attendanceDate: {
        title: 'Data Orçamento',
        valuePrepareFunction: (attendanceDate) => {
          if(!attendanceDate){
            return 'Sem data';
          }else{
            const raw = new Date(attendanceDate);
            const formatted = this.datePipe.transform(raw, 'dd/MM/yyyy');
            return formatted;

          }
        }
      },
      executionDate: {
        title: 'Data Execução',
        valuePrepareFunction: (executionDate) => {
          if(!executionDate){
            return 'Sem data';
          }else{
            const raw = new Date(executionDate);
            const formatted = this.datePipe.transform(raw, 'dd/MM/yyyy');
            return formatted;

          }
        }
      },
      statusOrder: {
        title: 'Status da O.S',

      }
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
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getOs();
  }

  getOs() {
    this.restService.get('OrderService').subscribe(os => {
      this.data = os;
      console.log(this.data);
    });
  }
  openModel(event) {
    alert(event.data.id);
    console.log(event);
  }


}
