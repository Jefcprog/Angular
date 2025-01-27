import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman','Hulk','Thor','Capitán América']

  public deletedHero?:string

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop()
  }
}
