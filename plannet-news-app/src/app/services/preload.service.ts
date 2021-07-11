import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class PreloadService implements PreloadingStrategy {
  
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload && route.path != null) {
      console.info("Preloading path " + route.path);
      return load();
    }
    else {
      return of(null);
    }
  }

}
