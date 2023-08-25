import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public sendData = new EventEmitter()

  public list: Array<{ name: string, age: number }> = [
    { name: 'Augusto', age: 23 },
    { name: 'Carlos', age: 58 },
    { name: 'Ana', age: 20 },
    { name: 'Flávia', age: 27 },
  ]

  public getData(index: number): void {
    this.sendData.emit(this.list[index])
  }
}
