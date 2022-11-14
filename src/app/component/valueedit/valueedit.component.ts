import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-valueedit',
  templateUrl: './valueedit.component.html',
  styleUrls: ['./valueedit.component.scss'],
})
export class ValueeditComponent implements OnInit {

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    
  }

  updateValueOne(event: any) {
    this.valueService.valueOne = event.target.value;
  }

}
