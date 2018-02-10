import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from "../../services/login.service";
import {AuthGuardService} from "../../services/auth-guard.service";
import {Router} from "@angular/router";
import {GroupService} from "../../services/group.service";

/** @title Responsive sidenav */
@Component({
    selector: 'sidenav-responsive',
    templateUrl: 'sidenav-responsive.html',
    styleUrls: ['sidenav-responsive.css'],
})
export class SidenavResponsive implements OnInit, OnDestroy {

    private isLoggedIn = false;

    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    private groups = [];

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
                private loginService: LoginService, private auth: AuthGuardService,
                private router: Router, private groupService: GroupService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this.loginService.checkSession().subscribe(
            res => {
                this.isLoggedIn = true;
                this.groupService.getGroups().subscribe(res => res.forEach(group => {
                    this.groups.push(group)
                }))
            },
            error => {
                this.isLoggedIn = false;
            }
        );
    }

    logout() {
        this.loginService.logout().subscribe(
            res => {
                if (this.auth.removeToken()) {
                    location.reload();
                    this.router.navigate([]);
                }
            },
            error => {
                console.log(error);
            }
        );
    }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */