import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  
})
export class MenuComponent {
  @Output() onMenuClick = new EventEmitter<string>();

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  onSelect(page: string) {
    // this.onMenuClick.emit(page);
    this.appService.activePage = page;
    this.router.navigate([page])
  }
}
