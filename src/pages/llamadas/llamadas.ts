import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PERSONAJES } from "../../data/personajes.data";
import { Personaje } from "../../interfaces/personajes.interface";
import {DescripcionPage} from "../index.paginas";

@Component({
  selector: 'page-llamadas',
  templateUrl: 'llamadas.html',
})

export class LlamadasPage {

	personajes:Personaje[]=[];

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.personajes=PERSONAJES.slice(0);

  	}

  	descripcionPersonaje(personaje:any){
  		console.log(personaje);
  		this.navCtrl.push(DescripcionPage, {'personaje':personaje});
  	}

}
