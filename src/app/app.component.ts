import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { KomuniService} from './komuni.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KomuniService]
})
export class AppComponent {
	constructor(private kom:KomuniService) {
	 
	 }

 	itle = 'app';
  	sendMessage(): void{
  		this.kom.sendMessage('tekst');
  		console.log('klik :)');
  }
}
