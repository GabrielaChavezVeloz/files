import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { ShowHideDirective } from "@angular/flex-layout";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router,
                private afAuth: AngularFireAuth) {}
    
    registerUser(authData: AuthData){
        // this.user = {
        //     email: AuthData.email,
        //     userId: Math.round(Math.random() * 10000).toString()
        // };
        // this.authSuccessfully();

        this.afAuth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.authSuccessfully();
            })
            .catch(error => {
                console.log(error);
            });
    }

    login(authData: AuthData) {
        // this.user = {
        //     email: AuthData.email,
        //     userId: Math.round(Math.random() * 10000).toString()
        // };
        // this.authSuccessfully();

        this.afAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.authSuccessfully();
            })
            .catch(error => {
                console.log(error);
            });
    }

    logout() {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    }

    isAuth() {
        return this.isAuthenticated;
    }

    authSuccessfully() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/books']);
    }
}