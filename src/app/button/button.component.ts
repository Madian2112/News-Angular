import { Component, Output, EventEmitter, Input, Inject  } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() botonClick = new EventEmitter<void>();
  @Input() nombre1? : String;
  @Input() nombre2? : String;

  // Método que se llamará al hacer clic en el botón
  onClick() {
    this.botonClick.emit(); // Emitimos el evento al padre
  }
}
