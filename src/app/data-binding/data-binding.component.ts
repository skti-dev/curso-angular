import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  constructor() {}

  public nome: string = 'Augusto'
  public idade: number = 23

  public isDisabled:boolean = true
  public imgSrc: string = 'https://images.unsplash.com/photo-1615731979436-b52a728a4d96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
  public imgTitle: string = 'Abóboras'

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public alertaInfo(ev: MouseEvent): void {
    // console.log({ evAlertInfo: ev })

    alert('Informação')
  }

  public mousemoveTeste(ev: MouseEvent): void {
    console.log({ evMousemoveTeste: ev })
    this.position.x = ev.offsetX
    this.position.y = ev.offsetY
  }
}
