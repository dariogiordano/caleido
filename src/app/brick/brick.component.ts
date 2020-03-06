import { Component, OnInit, Input, HostListener } from '@angular/core';
import { from, of, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.scss']
})
export class BrickComponent implements OnInit {
  itemsNr:number[]
  h:number
  w:number
  @Input() w$:Observable<number>
  @Input() imgSrc:string
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.itemsNr =  Array(Math.ceil((window.innerWidth/this.w)+1)).fill("").map((x,i)=>i+1); // [0,1,2,3,4]
  }

  constructor() {}

  ngOnInit() {
    this.w$.subscribe(w=>{
      this.w=w
      this.h=Math.ceil(w*0.866)
      this.itemsNr = Array(Math.ceil((window.innerWidth/this.w)+1)).fill("").map((x,i)=>i+1); // [0,1,2,3,4]
    })
  }

  getClass(number:number, isOdd:boolean,shiftThree:boolean){

    switch (number%3){
      case 0:
       if(shiftThree) return isOdd?"seventh":"eighth";
       return isOdd?"first":"second"
      case 1:
        if(shiftThree) return isOdd?"ninth":"tenth";
        return isOdd?"third":"fourth"
      case 2:
        if(shiftThree) return isOdd?"eleventh":"twelfth";
        return isOdd?"fifth":"sixth"
    }
   

  }

}
