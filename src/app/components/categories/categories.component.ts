import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDTO';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html', 
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!: Array<CategoryDto>;

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((res: ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res.data);
        this.categories = res.data;
      }
    })
  }

}
