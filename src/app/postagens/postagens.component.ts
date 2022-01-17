import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {Posts} from "../models/posts";

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  dataSource: Posts[];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getPosts().subscribe(
      (posts) => {
        this.dataSource = posts;
      });
  }


}
