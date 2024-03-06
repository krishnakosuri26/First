import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  subject = new BehaviorSubject<number>(100);
  
    subscribeToSubject() {
      return this.subject;
    }
  
    emitValues() {
      this.subject.next(200);
      this.subject.next(300);
    }
  
    subscribeToSubjectAgain() {
      return this.subject;
    }
  
    emitMoreValues() {
      this.subject.next(2020);
      this.subject.next(2023);
    }
  }
  