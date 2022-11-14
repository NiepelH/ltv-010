import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-valueview',
  templateUrl: './valueview.component.html',
  styleUrls: ['./valueview.component.scss'],
})
export class ValueviewComponent implements OnInit {

  constructor(private valueService: ValueService) { }

  ngOnInit() {}

}
