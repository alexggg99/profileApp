import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../model/trip";

@Component({
  selector: 'sharing-list-item',
  templateUrl: './sharing-list-item.component.html',
  styleUrls: ['./sharing-list-item.component.css']
})
export class SharingListItemComponent implements OnInit {

  @Input() trip: Trip;

  constructor() { }

   step;

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
  }

}
