import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {APP_CONFIG} from "./app.config";
import {AppConfig} from "./app-config";
import {Car} from "../model/car";

@Injectable()
export class CarService {
    constructor(private http: HttpClient, private router: Router, @Inject(APP_CONFIG) private config: AppConfig) { }
    getCars() {
        return this.http.get<Car>(this.config.serverCars + '/car');
    }
}