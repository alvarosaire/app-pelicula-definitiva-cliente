import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../Interfaces/pelicula';
import { PeliculaService } from '../../Services/pelicula.service';

@Component({
  selector: 'app-pelicula-list',
  standalone: true,
  imports: [
 //   RouterOutlet, 
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit{
  listaPeliculas: Pelicula[]=[];


  //private _peliculaServicio: PeliculaService;
  //private fb: FormBuilder;
  //private cdr = inject(ChangeDetectorRef); 
  
  constructor(
    private _peliculaServicio: PeliculaService,
  ){ }

  obtenerPeliculas(){
    this._peliculaServicio.getList().subscribe({
      next:(data: Pelicula[])=>{
        this.listaPeliculas = [...data];
        //this.cdr.detectChanges(); 
      },
      
      error:(e: any)=>{
        console.error("Error al cargar la lista de películas:", e);
      }
    })
  }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

}