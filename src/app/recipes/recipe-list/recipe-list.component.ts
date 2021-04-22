import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', "https://site.extension.uga.edu/walkgeorgia/files/2016/03/5382490643_6d71560e8d_o-2.jpg"),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', "https://site.extension.uga.edu/walkgeorgia/files/2019/08/AppleOatmealMuffinsII310x200.jpg")


  ];

  constructor() {}

  ngOnInit(): void {

  }
}