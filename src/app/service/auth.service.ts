import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AuthService{
    constructor(private httpService: HttpClient){}

    login(email: string, password: string){
        return this.httpService.get(`http://localhost:3000/users?email=${email}&password=${password}`);
    }
}