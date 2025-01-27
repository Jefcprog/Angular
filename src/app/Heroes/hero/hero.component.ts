import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,

  templateUrl: './hero.component.html',
})
export class HeroComponent {

  public name : string = 'Ironman'
  public age : number = 45

  changeName(name : string){
    this.name = "Spiderman"
  }

  changeAge(age : number){
    this.age = 25
  }

  resetForm():void{
    this.name = 'Ironman'
    this.age = 45

    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
}
