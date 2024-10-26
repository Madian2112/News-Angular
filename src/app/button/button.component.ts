import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone : true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() botonClick = new EventEmitter<void>();
  @Input() nombre? : String;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.botonClick.emit(); // Emitimos el evento al padre
  }

}
