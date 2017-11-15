import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { KomuniService} from '../komuni.service';
import { KomunidveService} from '../servis/komunidve.service';
//import { DrugiModule }  from '../drugi/drugi.module'; 



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	message: any;
	subscription: Subscription;

  constructor(private kom:KomuniService, private kom2:KomunidveService) {
  	this.kom2.getMessage()
  	.subscribe(mess => {
  		console.log('dobil podatek2');
  		this.message = mess;
  	})
  }

  ngOnInit() {
  }

}
