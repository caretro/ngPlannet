import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AppService {

  private _activePage: string = 'home';

  public get activePage(): string {
    return this._activePage;
  }

  public set activePage(page: string) {
    this._activePage = page;
  }
}
