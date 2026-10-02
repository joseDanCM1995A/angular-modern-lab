import { Component, computed, ElementRef, input, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent {

  images = input.required<any[]>()

 // Estado central: índice actual
  current = signal(0);

  // Total de slides (para dots y límites)
  readonly total = computed(() => this.images().length);
  readonly dots = computed(() => Array.from({ length: this.total() }, (_, i) => i));

  next() {
    this.current.update(i => (i + 1) % this.total());
  }

  prev() {
    this.current.update(i => (i - 1 + this.total()) % this.total());
  }

  goTo(index: number) {
    this.current.set(index);
  }
}
