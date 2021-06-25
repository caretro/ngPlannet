import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() onMenuClick = new EventEmitter<string>();

  onSelect(page: string) {
    this.onMenuClick.emit(page);
  }

}
