import {Component, inject, input, signal} from '@angular/core';
import {Album} from '../../models/album.model';
import {AlbumService} from '../../services/album-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-detail-component',
  imports: [
    RouterLink
  ],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent {
  albumService = inject(AlbumService);
  id = input<string | undefined>(undefined);
  album = signal<Album | undefined>(undefined);

  ngOnInit() {
    this.albumService.getAlbumById(Number(this.id())).subscribe({
      next: (Album) => {
        this.album.set(Album);
      },
      error: (err) => {console.log(err)}
    });
  }

  updateAlbum(newTitle: string) {

    this.album.update(prev => {
      if(!prev) return undefined;

      return {...prev, title: newTitle}
    });
  }
}
