import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavsService } from '../../../core/services/favs.service';

@Component({
  selector: 'app-sayajins-list',
  imports: [],
  templateUrl: './sayajins-list.component.html',
  styleUrl: './sayajins-list.component.scss',
})
export class SayajinsListComponent{
  sayajins = input.required<any[]>()
  router = inject(Router)
  favsSservice = inject(FavsService)

  viewDetail(id: number): void{
    this.router.navigate(['/sayajins', id])
  }

  saveToFavs(character: any): void{
   this.favsSservice.addToFavs(character)
  }
}
