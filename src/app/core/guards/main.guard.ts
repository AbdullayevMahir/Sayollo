import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class MainGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(!!localStorage.getItem('isLoggedIn')) return true;
    this.router.navigateByUrl('/auth')
    return false;
  }
}
