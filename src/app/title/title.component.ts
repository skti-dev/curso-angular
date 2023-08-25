import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Hello World Angular' // Input é a entrada de dados

  constructor() {  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void { // só é ativado quando o dado vêm de fora. Executado sempre que o componente sofrer uma mudança
    // console.log("ngOnChanges | titleComponent: ", changes)
  }

  ngOnDestroy(): void { // Executado quando o componente é destruido
    // console.log("ngOnDestroy | titleComponent")
  }
}
