import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService) {}

  // public listAddItem(value: string) {
  //   this.foodListService.foodListAdd(value)
  // }
  
  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: res => this.foodListService.foodListAlert(res),
      error: err => console.error(err),
    })
  }
}
