import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NEWS } from 'src/app/assets/news-data';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  @Input() title: string;
  @Output() titleChange = new EventEmitter<string>();

  news: News[] = NEWS;
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
  }
  
  onSubmit() {
    this.news.unshift(this.form.value as News);
    alert('Inserita news ' + this.form.get("title")?.value);
  }

}
