import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { KomuniService} from '../../komuni.service';
import { KomunidveService} from '../../servis/komunidve.service';

@Component({
  selector: 'app-viewdve',
  templateUrl: './viewdve.component.html',
  styleUrls: ['./viewdve.component.css']
})
export class ViewdveComponent implements OnInit {
	message: any;
  message2: any;

	subscription: Subscription;	
  constructor(private kom:KomuniService, private kom2:KomunidveService	) { 
  this.kom.getMessage()
  	.subscribe(mess => {
  		console.log('DRUGI DELA TUT');
  		this.message = mess;
  	});

  this.kom2.getMessage()
    .subscribe(messs => {
      console.log('DRUGI.2 DELA TUT');
      this.message2 = messs;
    })
  }

  ngOnInit() {
  }

}
