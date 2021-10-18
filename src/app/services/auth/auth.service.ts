import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(username: string, password: string): Promise<void | string> {
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if (username === 'LaFaceCachéeDeLaLune' && password === 'Issou2021') {
            this.token.next('ghfghjgbhj');
            res();
          }
          rej('Les identifiants sont incorrects.')
        }, 500)
      })
  }

  signout(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    })
  }
}
