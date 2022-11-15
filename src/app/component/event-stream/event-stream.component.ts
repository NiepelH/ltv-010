import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventMqttServiceService } from 'src/app/service/event.mqtt.service.service';
import { IMqttMessage } from "ngx-mqtt";

@Component({
  selector: 'app-event-stream',
  templateUrl: './event-stream.component.html',
  styleUrls: ['./event-stream.component.scss'],
})
export class EventStreamComponent implements OnInit {

  events: any[];
  private deviceId: string;
  subscription: Subscription;

  constructor(private readonly eventMqtt: EventMqttServiceService) {

   }

  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }

  private subscribeToTopic() {
    this.subscription = this.eventMqtt.topic(this.deviceId)
        .subscribe((data: IMqttMessage) => {
            let item = JSON.parse(data.payload.toString());
            this.events.push(item);
        });
  }




}
