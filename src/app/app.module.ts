import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TriangleImageComponent } from './triangle-image/triangle-image.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrickComponent } from './brick/brick.component';
import { MatSliderModule } from '@angular/material/slider';
import {NgxImageCompressService} from 'ngx-image-compress';

@NgModule({
  declarations: [
    AppComponent,
    TriangleImageComponent,
    DashboardComponent,
    BrickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    MatSliderModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
