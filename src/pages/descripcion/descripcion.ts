import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {

	personaje:any={};

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.personaje=this.navParams.get("personaje");
  	}

  	irAtras(){
  		this.navCtrl.pop();
  	}
}
