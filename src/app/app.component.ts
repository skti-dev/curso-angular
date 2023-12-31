import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title 
      *ngIf="destruir"
      title="Dinamico"
    />
    <button (click)="toggleComponente()">Toggle componente title</button>

    <br />
    <br />
    <hr />

    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>

    <br />
    <br />
    <hr />
    
    <app-data-binding />

    <br />
    <br />
    <hr /> -->

    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1> Utilizando ngContent para escrever um título </h1> 
      <hr />
    </app-diretivas-atributos> -->
    
    <!-- <app-new-component></app-new-component> -->

    <!-- <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Adicionar</button> -->

    <!-- <ng-template [ngIf]="getData">
      <h1> Nome: {{ getData.name }} </h1>
      <h1> Idade: {{ getData.age }} </h1>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output> -->

    <!-- <app-food-add></app-food-add>
    <app-food-list></app-food-list> -->

    <app-forms></app-forms>

    <router-outlet />
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {}

  public destruir:boolean = true
  public valor: number = 1

  public adicionar(): number {
    return this.valor += 1
  }

  public toggleComponente(): void {
    this.destruir = !this.destruir
  }

  public addValue: number = 10

  public add(): void {
    this.addValue += 1
  }

  public getData: { name: string, age: number } | undefined

  public setData(data: { name: string, age: number }) {
    this.getData = data
  }

  ngOnInit(): void { // Ciclo de vida inicial do Angular, roda o ngOnInit sempre que o componente for montado
    // console.log('ngOnInit | app-root')
  }

  ngDoCheck(): void { // Executado a cada mudança que o ngOnChange não detecta
    // console.log('ngDoCheck | app-root')
  }

  ngAfterContentInit(): void { // Executado sempre que um conteúdo vindo de uma fonte externa do componente é inserido 
    // console.log('ngAfterContentInit | app-root')
  }

  ngAfterContentChecked(): void { // Executado quando o conteúdo externo é verificado 
    // console.log('ngAfterContentChecked | app-root')
  }

  ngAfterViewInit(): void { // Executado logo após os dados dos filhos e do próprio componente ser inicializado 
    // console.log('ngAfterViewInit | app-root')
  }

  ngAfterViewChecked(): void { // Executado sempre que é detectado uma alteração no conteúdo  
    // console.log('ngAfterViewChecked | app-root')
  }
}
