import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texas',
  templateUrl: './texas.component.html',
  styleUrls: ['./texas.component.sass']
})
export class TexasComponent implements OnInit {

  appTitle: string = 'ourapp';
  
  constructor() { }

  ngOnInit(): void {
  }

}
