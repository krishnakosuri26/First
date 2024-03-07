import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  activeRout: ActivatedRoute = inject(ActivatedRoute);

  routeNumber: number = 0;
  
  ngOnInit(){
    this.routeNumber = this.activeRout.snapshot.params['id'];
    //this.routeNumber = +this.activeRout.snapshot.paramMap.get('id');
    console.log(this.routeNumber);
   }

}
