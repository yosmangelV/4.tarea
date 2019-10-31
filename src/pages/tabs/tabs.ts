import { Component } from '@angular/core';
import {LlamadasPage,AudioPage,MensajePage} from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1:any;
	tab2:any;
	tab3:any;

  	constructor() {
  		this.tab1=LlamadasPage;
  		this.tab2=MensajePage;
  		this.tab3=AudioPage;
  	}



}
