import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
