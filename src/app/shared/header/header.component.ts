import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../modules/authentication/helpers/auth.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public userName: string | null = this.itemService.userName$.getValue();

  constructor(
    private authService: AuthService,
    private itemService: ItemsService,
    private router: Router
  ) {
  }

  logOut(): void{
    this.authService.logOut();
    this.itemService.userName$.next(null);
  }

  register(): void{
    this.router.navigate(['/login/register']).then();
  }
}
