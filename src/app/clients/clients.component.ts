import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {

  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['cpf'] = form.value.cpfInput;
    jsonPost['nome'] = form.value.nomeInput;
    jsonPost['rua'] = form.value.ruaInput;
    jsonPost['bairro'] = form.value.bairroInput;
    jsonPost['cidade'] = form.value.cidadeInput;
    jsonPost['estado'] = form.value.estadoInput;
    jsonPost['cep'] = form.value.cepInput;
    jsonPost['numero'] = form.value.numeroInput;
    jsonPost['telefone'] = form.value.numeroInput;
    jsonPost['celular'] = form.value.numeroInput;
    jsonPost['status'] = true;

    this.restService.post('clientes', jsonPost).subscribe(client => {
      try {
        if (this.isEmptyObject(client)) {
          alert('Erro ao criar cliente!');
          return false;
        } else {
          alert('Cliente criado!');
          this.router.navigate(['/listClients']);

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
