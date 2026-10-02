import { Service, signal } from '@angular/core';

@Service()
export class FavsService {
  favs = signal<any[]>([])

  constructor(){
    const favsLS = localStorage.getItem('favs')

    this.favs.set(!favsLS ? [] : JSON.parse(favsLS))
  }

  removeFromFavs(character: any){
    const newFavs = this.favs().filter(c => c.id !== character.id)
    this.favs.set([...newFavs])
    localStorage.setItem('favs', JSON.stringify(this.favs()))
  }

  addToFavs(character: any): void{
    const isExists = this.favs().filter((data: any) => data.id === character.id)

    if(isExists.length > 0) return

    this.favs.set([...this.favs(), character])
    localStorage.setItem('favs',JSON.stringify(this.favs()))
  }


}
