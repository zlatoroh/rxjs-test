import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class KomunidveService {
	private subject = new Subject<any>();
  constructor() { }
	sendMessage(message: string){
		console.log('SERVIS2');
		this.subject.next('Servis iz modula');
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
