import {Component, inject, signal} from '@angular/core';
import { AlbumService } from '../../services/album-service';
import {Album} from '../../models/album.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-albums-component',
  imports: [
    RouterLink
  ],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent {
  albumService = inject(AlbumService);
  albums = signal<Album[] | undefined>(undefined);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
      },
      error: (err) => console.log(err)
    });
  }

  deleteAlbum(id: number) {
    this.albums.update(albums =>
       albums?.filter(album => album.id !== id)
    )
  }
}
