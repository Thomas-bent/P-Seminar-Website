import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-mate',
  templateUrl: './team-mate.component.html',
  styleUrls: ['./team-mate.component.css']
})
export class TeamMateComponent implements OnInit {

  @Input('name') name: string = '';
  @Input('text') text: string = '';

  constructor() { 

  }

  ngOnInit(): void {
  }

}
