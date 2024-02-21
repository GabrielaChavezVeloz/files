import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { doc, getDoc } from "firebase/firestore";

import { AuthData } from "../auth/auth-data.model";
import { UserDB } from "./user.db.model";
import { async } from "rxjs";


@Injectable()
export class UsersService {

    user: UserDB = {
        email: "",
        password: "",
        displayName: "",
        firstName: "",
        lastName: "",
        about: "",
        domain: "",
        urlPicture: ""
    };

    constructor(private db: AngularFirestore) {}

    addUsertoDataBase(authData: AuthData) {
        this.db.collection('users').add(JSON.parse( JSON.stringify(authData)));
        console.log('added user in db');
        this.user.email = authData.email;
    }

    getUser(email: String) {

        this.db

        // const docRef = doc(this.db, "cities", "SF");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        // } else {
        // // docSnap.data() will be undefined in this case
        // console.log("No such document!");
        // }

    }
};