import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  // private list: Array<string> = ["X Bacon", "Feijão", "Ovo"]

  // public foodList() {
  //   return this.list
  // }

  // public foodListAdd(value: string) {
  //   if(!value) return
  //   this.foodListAlert(value)
  //   this.list.push(value)
  // }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value)
  // }

  private url: string = "http://localhost:3000/"

  public emitEvent = new EventEmitter();


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer token, etc..
    })
  }

  constructor(private http: HttpClient) { }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(res => res, error => error)
  }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { name: value }, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }

  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { name: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }
}
