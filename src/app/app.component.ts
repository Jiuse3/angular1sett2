import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from './models/album.interface';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Esercizio1Aw11';
  sub!: Subscription;
  albums!: Album[] | undefined
  likes: number = 0;



  constructor(private albumSrv: AlbumService, private http: HttpClient ){}

  ngOnInit():void{
    this.getAlbums();

  }
deleteCard(id:number){
  this.sub = this.albumSrv.delete(id).subscribe(()=>{
    this.albums =this.albums?.filter((albums: { id: number; }) => albums.id !=id)
  })
}

// deleteCard(id:number){
//   return this.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
// }



  countLike(){
    this.likes ++;
  }


  getAlbums(){
    this.sub = this.albumSrv.get().subscribe((res)=> {
      console.log(res);
      this.albums = res;
      console.log(this.albums)
    })
  }

}
