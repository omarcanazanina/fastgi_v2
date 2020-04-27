import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  loadMoney() {
    this.router.navigate(['/load-money'])
  }
  removeMoney() {
    this.router.navigate(['/remove-money'])
  }
  pin() {
    this.router.navigate(['/pin'])
  }
  amount() {
    this.router.navigate(['/amount'])
  }

}
