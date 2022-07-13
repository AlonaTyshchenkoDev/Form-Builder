import { Component} from '@angular/core';

import { AuthService } from '../../modules/login-page/helpers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public userName: string | null = localStorage.getItem('username');


  constructor(private authService: AuthService) { }

  logOut() {
    this.authService.logOut();
  }
}
