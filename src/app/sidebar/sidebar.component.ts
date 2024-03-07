import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{

  activeRout: ActivatedRoute = inject(ActivatedRoute);

  routeNumber: number = 0;

  ngOnInit(){
   this.activeRout.snapshot.paramMap.get('id');
   console.log(this.activeRout);
  }

  }
