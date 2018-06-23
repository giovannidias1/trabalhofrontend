import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {

  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['nome'] = form.value.nomeInput;
    jsonPost['rua'] = form.value.ruaInput;
    jsonPost['bairro'] = form.value.bairroInput;
    jsonPost['cidade'] = form.value.cidadeInput;
    jsonPost['estado'] = form.value.estadoInput;
    jsonPost['cep'] = form.value.cepInput;
    jsonPost['numero'] = form.value.numeroInput;
    jsonPost['telefone'] = form.value.numeroInput;
    jsonPost['status'] = true;

    this.restService.post('agencia', jsonPost).subscribe(client => {
      try {
        if (this.isEmptyObject(client)) {
          alert('Erro ao criar agencia!');
          return false;
        } else {
          alert('Agência criado!');
          this.router.navigate(['/listAgency']);


        }
      } catch (err) {
        console.log(err);
      }
      console.log(client);
    });
  }
  public isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

}
