import { Component, inject, input, OnInit, signal } from '@angular/core';
import { SayajinService } from '../../../core/services/sayajin.service';
import { SayajinComponent } from '../../components/sayajin/sayajin.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';

@Component({
  selector: 'app-sayajin-detail',
  imports: [SayajinComponent, CarrouselComponent],
  templateUrl: './sayajin-detail.page.html',
  styleUrl: './sayajin-detail.page.scss',
})
export default class SayajinDetailPage implements OnInit{
  id = input<number>(0)
  sayajinService = inject(SayajinService)
  sayajinData = signal<any>({})
  isLoading = signal<boolean>(false)

  ngOnInit(): void {
    this.getSayajin()
  }

  private getSayajin(): void{
    this.isLoading.set(true)
    this.sayajinService.getSayajinById(this.id()).subscribe({
      next: (response: any) => {
        this.isLoading.set(false)
        this.sayajinData.set(response)
      }
    })
  }



}
