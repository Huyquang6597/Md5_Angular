import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-eeditor',
  templateUrl: './font-size-eeditor.component.html',
  styleUrls: ['./font-size-eeditor.component.css']
})
export class FontSizeEeditorComponent implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }

}
