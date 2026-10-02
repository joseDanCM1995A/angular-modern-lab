import { Component, inject, OnInit, signal } from '@angular/core';
import { SayajinService } from '../../../core/services/sayajin.service';
import { SayajinsListComponent } from '../../components/sayajins-list/sayajins-list.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ApiResponse } from '../../../core/interfaces/apiResponse';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FavsBarComponent } from '../../components/favs-bar/favs-bar.component';

@Component({
  selector: 'app-home',
  imports: [SayajinsListComponent, PaginatorComponent, FiltersComponent, FavsBarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export  default class HomePage implements OnInit{

  sayajinService = inject(SayajinService)
  sayajinData = signal<ApiResponse>({} as ApiResponse)
  isLoading = signal<boolean>(false)
  isFavorite = signal(false);

  ngOnInit(): void {
    this.getSayajins(1);
  }

  private getSayajins(page: number): void{
    this.isLoading.set(true)
    this.sayajinService.getAllSayajins(page).subscribe({
      next: (response: ApiResponse) => {
        this.isLoading.set(false)
        this.sayajinData.set(response)
      }
    })
  }

  public changePage($event: any): void {
    this.getSayajins($event)
  }

  public filter(params: Record<string, string>): void {
    this.isLoading.set(true)
    this.sayajinService.filterSayajimsByFilter(params).subscribe({
      next: (response: any) => {
        this.isLoading.set(false)
        this.sayajinData.set('items' in response ? response : {...response, items: response})
      }
    })
  }
   toggle() {
    this.isFavorite.update(f => !f);
  }
}
