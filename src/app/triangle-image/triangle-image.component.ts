import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triangle-image',
  templateUrl: './triangle-image.component.html',
  styleUrls: ['./triangle-image.component.scss']
})
export class TriangleImageComponent implements OnInit {
  @Input() imgSrc:string
  @Input() cssClass:string
  constructor() { }

  ngOnInit() {
  }

}
