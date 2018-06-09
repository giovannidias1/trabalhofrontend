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
    this.restService.post('clientes', jsonPost).subscribe(client => {
      alert('trabalho ok!');
    });
  }

}
