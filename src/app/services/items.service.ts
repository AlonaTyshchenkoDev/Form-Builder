import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public activeItemIdx$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
}
