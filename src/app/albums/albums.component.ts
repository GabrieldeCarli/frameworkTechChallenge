import { Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {Albums} from '../models/albums';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit   {
  constructor(private apiService: ApiService) { }
  displayedColumns: string[] = ['id', 'title', 'userId'];
  dataSource: Albums[];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getAlbums().subscribe(
      (albums) => {
        this.dataSource = albums;
      });
  }

}
