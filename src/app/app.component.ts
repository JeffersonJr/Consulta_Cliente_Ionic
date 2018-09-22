import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppService } from '../app.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  title = 'Consulta Pessoas';
  resultados: Array<string>;
  idcliente: string;

  constructor(platform: Platform, private service: AppService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
  ngOnInit() { }

  onSelectChange(idcliente: any) {
    this.service.getAll(idcliente)
      .subscribe(
      resultados => { this.resultados = JSON.parse(resultados._body) }
      )
  }

}