import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {APP_CONFIG} from "./app.config";
import {AppConfig} from "./app-config";
import { Observable} from 'rxjs/Rx';
import { map, filter, scan, flatMap, mergeMap } from 'rxjs/operators';
import {Trip} from "../model/trip";

@Injectable()
export class TripService {
    constructor(private http: HttpClient, private router: Router, @Inject(APP_CONFIG) private config: AppConfig) { }
    countTrips() {
        return this.http.get<number>(this.config.serverCars + '/trip/count');
    }
    getTrips(page: number, size: number) {
        const options = { params: new HttpParams().set('page', '' + page).set('size', '' + size) };
        return this.http.get<any>(this.config.serverCars + '/trip', options)
            .pipe(
                map(res => res._embedded.trip)
            );
    }

    joinTrip(id: number) {
        return this.http.post(this.config.serverCars + '/trip/join/' + id, {})
    }

    disjointTrip(id: number) {
        return this.http.post(this.config.serverCars + '/trip/disJoin/' + id, {})
    }

    getUserTrips(tripId: number) {
        return this.http.get<any>(this.config.serverCars + '/trip/joined/' + tripId);
    }

    getTrip(tripId: number) {
        return this.http.get<Trip>(this.config.serverCars + '/trip/' + tripId);
    }
}