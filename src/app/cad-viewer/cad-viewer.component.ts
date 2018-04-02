import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cad-viewer.component.html',
  styleUrls: ['./cad-viewer.component.css']
})
export class CadViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMe = () => {
    alert("Hi");
  };
}
