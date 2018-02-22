import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {AuthGuardService} from "../../services/auth-guard.service";
import {TripService} from "../../services/trip.service";
import {Trip} from "../../model/trip";
import {PageEvent} from '@angular/material';

@Component({
  selector: 'sharing-list',
  templateUrl: './sharing-list.component.html',
  styleUrls: ['./sharing-list.component.css']
})
export class SharingListComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private auth: AuthGuardService,
              private tripService: TripService) { }

    length = 10;
    pageSize;
    pageIndex;
    pageSizeOptions = [3, 5];

    trips: Trip[] = [];

    pageEvent(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loadTrips(this.pageIndex, this.pageSize);
    }

  loadTrips(pageIndex: number, pageSize: number) {
      this.tripService.getTrips(pageIndex, pageSize).subscribe(res => {
          this.trips = res
      });
  }

  ngOnInit() {
    this.tripService.countTrips().subscribe(
        res => {
          this.length = res;
          if (this.length > 0) {
              this.loadTrips(this.pageIndex ? this.pageIndex : 0, this.pageSize ? this.pageSize : 3);
          }
        }
    )
  }



}
