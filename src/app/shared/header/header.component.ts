import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../modules/authentication/helpers/auth.service';
import { ItemsService } from '../../services/items.service';
import { EActionLogin } from '../../modules/authentication/helpers/consants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public EActionLogin = EActionLogin;
  public userName: string | null = this.itemService.userName$.getValue();
  public userAction: string = this.itemService.userAction$.getValue();

  constructor(
    private authService: AuthService,
    private itemService: ItemsService,
    private router: Router
  ) {
  }

  logOut(): void{
    this.authService.logOut();
    this.itemService.userName$.next(null);
    this.itemService.userAction$.next(EActionLogin.Registration);
  }

  register(): void{
    this.router.navigate(['/login/register']).then();
    this.itemService.userAction$.next(EActionLogin.LogIn);
  }

  logIn(): void{
    this.router.navigate(['/login']).then();
    this.itemService.userAction$.next(EActionLogin.Registration);
  }
}
