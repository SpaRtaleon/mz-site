import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.scss']
})
export class CseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  table = [
    {title: 'About Department', head: [{head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}],  body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]}, 
    {title: 'Vision & Mission' , head: [{head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]}, 
    {title: 'Third', head: [{head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]}, 
    {title: 'Fourth', head: [{head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}, {head: 'head'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]}
    ];
}
