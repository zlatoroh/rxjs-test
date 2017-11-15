import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { KomuniService} from '../komuni.service';

@Component({
  selector: 'app-viewdve',
  templateUrl: './viewdve.component.html',
  styleUrls: ['./viewdve.component.css']
})
export class ViewdveComponent implements OnInit {
	message: any;
	subscription: Subscription;	
  constructor(private kom:KomuniService	) { 
  this.kom.getMessage()
  	.subscribe(mess => {
  		console.log('DRUGI DELA TUT');
  		this.message = mess;
  	})
  }

  ngOnInit() {
  }

}
