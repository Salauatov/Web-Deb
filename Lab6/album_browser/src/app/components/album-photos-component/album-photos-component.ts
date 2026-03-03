import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album-service'; // <-- здесь имя файла точно как у тебя
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos-component.html',
  styleUrls: ['./album-photos-component.css']
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  albumId!: number;
  albumPhotos = signal<Photo[]>([]);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.albumPhotos.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}