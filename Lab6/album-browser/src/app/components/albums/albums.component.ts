import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  albums: Album[] = [];
  loading = true;

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        console.log(data);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  delete(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((a) => a.id !== id);
    });
  }
}