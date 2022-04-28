import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  standard = true;

  constructor() {

    
  }

  ngOnInit(): void {
    const navbar = document.getElementById('navbar_container');

    window.onscroll = () => {

      if (navbar != null) {
        if (window.scrollY > navbar.offsetTop) {
          this.standard = false;
          console.log(window.scrollY + "\t" + navbar.offsetTop);
          
        } else {
          this.standard = true;
        }
      }
    }
  }

}
