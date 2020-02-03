import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";

@Injectable({ providedIn: "root" })
export class UsersResolverService implements Resolve<Object> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    return this.usersService.getUserInfo();
  }
}
