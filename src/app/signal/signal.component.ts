import { ParsedEvent, Target } from '@angular/compiler';
import { Component, signal, NgModule, effect, Signal, HostListener } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import {ButtonComponent} from '../button/button.component'

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  quantity = signal<any>('null');
  disable : boolean = false;
  nombre : string = '';
  nombre1 : string = ''
  nombre2: string = '';

  constructor(){
    effect(() => {

      this.nombre += ((this.quantity() as Target) as InputEvent).data?.toString() ?? '';      
      
      if(((this.quantity() as Target) as InputEvent).data == null){
        this.nombre = this.nombre1;
      }

    });
  }


  // @HostListener('window:keydown.backspace', ['$event'])
  // eliminar(){

  //   this.nombre = this.nombre.slice(0, -1);

  //   console.log('Backspace', this.nombre)
  // }

}
