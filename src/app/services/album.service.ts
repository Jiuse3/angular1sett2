import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album.interface';
import { Subscription } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  filter(arg0: (albums: { id: number; }) => boolean): AlbumService {
    throw new Error('Method not implemented.');
  }
  sub!: Subscription;

  static id: number;

  constructor(private http: HttpClient) { }



  get(){
    let u = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos');
    return u
  }

  delete(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

}
