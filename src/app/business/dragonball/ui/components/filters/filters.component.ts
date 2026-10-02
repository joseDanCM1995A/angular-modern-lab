import { Component, inject, output, signal } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-filters',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  gender = signal<string[]>(['Male', 'Female', 'Unknown'])
  affiliation = signal<string[]>(['Z Fighter', 'Red Ribbon Army', 'Namekian Warrior', 'Freelancer', 'Army of Frieza', 'Pride Troopers', 'Assistant of Vermoud', 'God', 'Assistant of Beerus', 'Villain', 'Other'])
  race = signal<string[]>(['Human','Saiyan','Namekian Majin','Frieza Race Android' ,'Jiren Race','God Angel' ,'Evil' ,'Nucleico', 'benigno' ,'Unknown'])

  params = output<Record<string,string>>()

  filterForm!: FormGroup
  fb = inject(FormBuilder)

  constructor(){
    this.filterForm = this.fb.group({
      name: [''],
      race: [''],
      gender: [''],
      affiliation: [''],

    })
  }

  public search(): void {
    this.params.emit(this.removeEmptyStrings(this.filterForm.value))
  }

  private removeEmptyStrings<T extends Record<string, unknown>>(obj: T): Partial<T> {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== '' && v !== null)
    ) as Partial<T>;
  }

}
