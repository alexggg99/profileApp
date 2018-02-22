import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {APP_CONFIG} from "./app.config";
import {AppConfig} from "./app-config";
import { map, filter, scan } from 'rxjs/operators';

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
            )
    }
}