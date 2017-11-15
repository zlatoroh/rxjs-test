import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class KomuniService {
	private subject = new Subject<any>();
  	constructor() { }

	sendMessage(message: string){
		console.log('SERVIS');
		this.subject.next('testTekst');
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
