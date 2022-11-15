import { TestBed } from '@angular/core/testing';

import { EventMqttServiceService } from './event.mqtt.service.service';

describe('EventMqttServiceService', () => {
  let service: EventMqttServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMqttServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
