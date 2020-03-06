import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Ng2ImgMaxService } from 'ng2-img-max';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  @Output() changeWidth=new EventEmitter<any>()
  @Output() imageCroppedEvent=new EventEmitter<ImageCroppedEvent>()
  rot:number
  imageChangedEvent: any ;
  constructor(private ng2ImgMax: Ng2ImgMaxService) { }

  fileChangeEvent(event: any): void {
let newEv=Object.assign(event)

    let image = event.target.files[0];

  this.ng2ImgMax.resizeImage(image, 500, 400).subscribe(
    result => {
       this.imageChangedEvent =result;
    },
    error => {
      alert("Si è verificato un errore nel caricamento. Piprova dopo")
      console.log('😢 Oh no!', error);
    }
  );
   
  }

  onImageCropped(event: ImageCroppedEvent) {
    this.imageCroppedEvent.emit(event);
  }

  changeRot($event){
  
    this.rot=$event.value
  }

  formatLabel(value: number) {
    
      return Math.round(value * 90) + '°';
    

   
  }

 

  onChangeW($event){
    this.changeWidth.emit($event)
  }

  imageLoaded() {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
      alert("Si è verificato un errore nel caricamento. Piprova dopo")
  }

}
