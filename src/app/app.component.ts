import { Component, OnInit, HostListener } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  title = 'caleido';
  croppedImage: any;
  w$=new BehaviorSubject<number>(150)
  h=Math.ceil(this.w$.getValue()*0.86)
  rowNr:number[]

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.rowNr = Array(Math.ceil((window.innerHeight/this.h)+1)).fill("").map((x,i)=>i+1); // [0,1,2,3,4]
  }

  ngOnInit(){
    this.rowNr = Array(Math.ceil((window.innerHeight/this.h)+1)).fill("").map((x,i)=>i+1); // [0,1,2,3,4]
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }


  changeW($event){
    this.w$.next($event.value)
    this.h=Math.ceil($event.value*0.86)
    this.rowNr = Array(Math.ceil((window.innerHeight/this.h)+1)).fill("").map((x,i)=>i+1); // [0,1,2,3,4]
  }
  
}
