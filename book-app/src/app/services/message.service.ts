import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  logs: string[] = [];
  private message = new Subject<string>();
  public message$ = this.message.asObservable();


  constructor() { }

  addLogData(log: string, operation: string) {
    this.message.next(`${log}が${operation}されました`);
  }
}
