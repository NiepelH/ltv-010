import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ValueviewComponent } from '../component/valueview/valueview.component';
import { ValueeditComponent } from '../component/valueedit/valueedit.component';
import { EventStreamComponent } from '../component/event-stream/event-stream.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ValueviewComponent,
    ValueeditComponent,
    EventStreamComponent
  ]
})
export class HomePageModule {}
