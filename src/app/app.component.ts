import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { KomuniService} from './komuni.service';
import { KomunidveService} from './servis/komunidve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KomuniService]
})
export class AppComponent {
	constructor(private kom:KomuniService, private kom2:KomunidveService) {
	 
	 }

 	itle = 'app';
  sendMessage(): void{
  		this.kom.sendMessage('tekst');
  		console.log('klik :)');
  }

  sendMessage2(): void{
      this.kom2.sendMessage('tekst');
      console.log('klik :)');
  }
}
