import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {ToDos} from '../models/toDos';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  dataSource: ToDos[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getToDo().subscribe(
      (todos) => {
        this.dataSource = todos;
      });
  }

}
