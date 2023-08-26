import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = []
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res: Array<FoodList>) => this.foodList = res,
      error: (err: string) => console.error(err),
    })

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert(`Adicionando um novo item: ${res.name}`)
        this.foodList.push(res)
      },
      error: (err: string) => console.error(err),
    });
  }

  public foodListDelete(id: number) {
    this.foodListService.foodListDelete(id).subscribe({
      next: _res => {
        // tratativa por causa do json-server, vai depender do backend
        this.foodList = this.foodList.filter((item) => item.id !== id)
      },
      error: err => console.error(err)
    })
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => console.error(err)
    })
  }

  
}
