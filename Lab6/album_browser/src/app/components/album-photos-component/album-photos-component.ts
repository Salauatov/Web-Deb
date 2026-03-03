import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos-component.html',
  styleUrls: ['./album-photos-component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // важно для *ngFor и routerLink
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  albumPhotos = signal<Photo[]>([]);
  loading = signal(true);

  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.albumPhotos.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}