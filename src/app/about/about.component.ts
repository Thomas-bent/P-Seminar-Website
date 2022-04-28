import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teamMates: Array<mate> = [];

  constructor() {
    /* this.teamMates = [
      {
          "name": "Jakub F.",
          "role": "Design & Videobearbeitung",
          "description": "NaN"
      },
      {
          "name": "Marcel H.",
          "role": "Recherche",
          "description": "NaN"
      },
      {
          "name": "Michael G.",
          "role": "Programing",
          "description": "NaN"
      },
      {
          "name": "Thomas B.",
          "role": "Programing",
          "description": "Sexiest man alive"
      },
      {
          "name": "Thomas P.",
          "role": "Design",
          "description": "NaN"
      }
    ] */
  }

  ngOnInit(): void {
  }

}

class mate {
  name: string;
  role: string;
  description: string;

  constructor(name: string, role:string, description:string) {
    this.name = name;
    this.role = role;
    this.description = description;
  }
}