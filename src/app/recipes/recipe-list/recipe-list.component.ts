import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test', 'https://img.cuisineaz.com/660x660/2017-02-02/i119908-cannellonis-farcis-a-la-viande-sauce-tomate-et-fromage.jpeg'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://img.cuisineaz.com/660x660/2017-02-02/i119908-cannellonis-farcis-a-la-viande-sauce-tomate-et-fromage.jpeg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
