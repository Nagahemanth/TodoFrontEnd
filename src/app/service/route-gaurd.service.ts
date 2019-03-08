import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{
  constructor(private hardcodedAuth: HardcodedAuthenticationService,private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuth.isUserLoggedIn()){
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
   
  }
  

  
}
