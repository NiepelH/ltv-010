import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ValueService } from './service/value.service';

import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';


const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "localhost",
  port: 1883,
  protocol: "wss",
  path: '',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, 
    ValueService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
