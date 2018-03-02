import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../model/trip";
import {TripService} from "../../../services/trip.service";

@Component({
  selector: 'sharing-list-item',
  templateUrl: './sharing-list-item.component.html',
  styleUrls: ['./sharing-list-item.component.css']
})
export class SharingListItemComponent implements OnInit {

  @Input() trip: Trip;

  constructor(private tripService: TripService) { }

   step;

  join(id: number) {
    this.tripService.joinTrip(id).subscribe(
        res => {
            this.getUsers(id);
            this.toggle()
        }
    );
  }

  disjoint(id: number) {
    this.tripService.disjointTrip(id).subscribe(
        res => {
            this.getUsers(id);
            this.toggle();
        }
    );
  }

  private getUsers(tripId: number) {
    return this.tripService.getUserTrips(tripId).subscribe(
        res => {
            this.trip.users = res.users;
        }
    );
  }

  private toggle() {
      this.trip.joined = !this.trip.joined;
  }

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
