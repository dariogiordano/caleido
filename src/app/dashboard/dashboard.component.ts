import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {NgxImageCompressService} from 'ngx-image-compress';


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
  constructor(private imageCompress: NgxImageCompressService) { }


  compressFile() {
  
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      var i = new Image(); 

      i.onload = function(){
       console.log((400/i.width)*100)
       if(i.width>400){
          this.imageCompress.compressFile(image, orientation, (400/i.width)*100, 100).then(
        result => {
         
          this.imageChangedEvent=this.dataURItoBlob(result)
         
        }
      
      );
    }else
    {
      console.log("not")
    this.imageChangedEvent=this.dataURItoBlob(image)
    }
      }.bind(this);

      i.src = image;       
    });
    
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
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
