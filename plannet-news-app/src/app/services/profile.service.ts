import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Profile } from "../models/profile";
import { Subject } from "rxjs";

@Injectable()
export class ProfileService {

    public profile$: Subject<Profile> = new Subject();

    constructor(
        private http: HttpClient
    ) { }

    public getProfile() {
        return this.http.get<Profile>("../../assets/profile-data.json");
    }

    public getProfileSubject() {
        return this.http.get<Profile>("../../assets/profile-data.json")
            .subscribe(data => {
                this.profile$.next(data);
            });
    }
}