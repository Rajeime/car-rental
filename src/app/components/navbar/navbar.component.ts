import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  
  <nav>
    <div class="logo">
        <h4>Logo</h4>
    </div>

    <ul class="links">
      <li>Home</li>
      <li>About Us </li>
      <li>Contact</li>
      <li>Login</li>
      <li>Services</li>
      <li>Sign Up</li>
    </ul>
    
    <button class="rent">Rent a car</button>
</nav>`,
  styles: [
    `nav{
      display:flex;
      justify-content : space-around;
      align-items : center;
      background-color : rgb(31, 31, 31);
      font-family: sans-serif;
    }

    .logo h4{
      color:white;
      font-weight : 400;
      font-size : 18px;
      text-transform : uppercase;
    }
    
    .links{
      display:flex;
    }
    
    .links li{
      list-style-type:none;
      padding : 0px 10px;
      text-transform : uppercase;
      font-size: 12px;
      color:white;
      font-family: sans-serif;
    }

    .rent{
      background-Color:transparent;
      border: 1px solid white;
      padding: .4rem .6rem;
      color: white;
      text-transform : uppercase;
      font-size : 12px
    }
    
    
    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
