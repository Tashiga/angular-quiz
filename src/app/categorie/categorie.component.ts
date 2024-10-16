import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../shared/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  categoryList: any[] = [];
  research: string = '';
  filtCategories:any[] = [];

  constructor(
    private categoryService: CategorieService,
    private route :Router) {}

  ngOnInit(): void {
    //init categories in list
    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categoryList = categories;
      this.filtCategories = categories;
    });
  }

  search(){
    if (this.research != null && this.research.trim() === '') {
      this.filtCategories = this.categoryList;
    } else {
      this.filtCategories = this.categoryList.filter(category =>
        category.name.toLowerCase().includes(this.research.toLowerCase())
      );
    }
  }

  reset(){
    this.filtCategories = this.categoryList;
    this.research = '';
  }

  selectedCategory(idCategorie: number){
    this.route.navigate(['/quiz', idCategorie]); 
  }
}
