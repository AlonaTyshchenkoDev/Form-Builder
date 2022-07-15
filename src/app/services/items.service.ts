import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EActionLogin } from '../modules/authentication/helpers/consants';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public activeItemIdx$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userName$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userAction$: BehaviorSubject<string> = new BehaviorSubject<string>(EActionLogin.Registration);
}
