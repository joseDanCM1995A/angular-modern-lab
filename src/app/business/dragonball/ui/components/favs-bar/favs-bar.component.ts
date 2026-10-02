import { Component, inject, input, signal } from '@angular/core';
import { FavsService } from '../../../core/services/favs.service';

@Component({
  selector: 'app-favs-bar',
  imports: [],
  templateUrl: './favs-bar.component.html',
  styleUrl: './favs-bar.component.scss',
})
export class FavsBarComponent {
  showFavs = signal<boolean>(false)
  favsService = inject(FavsService)

  showFavsSection(): void{
    this.showFavs.set(!this.showFavs())
  }

  removeFromFavs(character: any){
    this.favsService.removeFromFavs(character)
  }
}
