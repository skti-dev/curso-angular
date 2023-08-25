import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public value:boolean = false
  public height:string = '20px'
  public backgroundColor: string = '#0000AA'

  public name:string = ''
  public list: Array<{ name: string }> = [{ name: 'Maçã' }, { name: 'Banana' }]

  public add(): void {
    this.list.push({ name: this.name })
  }

  public date: Date = new Date()

  ngOnInit(): void {
    setInterval(() => {
      this.value = !this.value
      this.height = this.height === '20px' ? '50px' : '20px'
      this.backgroundColor = this.backgroundColor === '#0000AA' ? '#0AA0AA' : '#0000AA'
    }, 2000)
  }
}
