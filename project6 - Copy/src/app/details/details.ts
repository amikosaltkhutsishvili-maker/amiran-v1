import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api';
import { Product } from '../models/product';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  constructor(private route : ActivatedRoute, private api : Api, private cdr : ChangeDetectorRef){
     this.route.queryParams.subscribe((data: any) => {
        //  console.log(data['id']);
        
         console.log(data.id);

         this.selsecteId = data.id
         
     })
  }


      ngOnInit(){
        this.api.getAll("Products/GetAll").subscribe((resp:any) => {
          console.log(resp)
           this.productsarr = resp   // 27 

          this.selectedProdut = this.productsarr.find(el => el.id == this.selsecteId) || new Product()
 
          this.cdr.detectChanges()  // ყველა ქოლის მერე დაამატეთ 
           
        })

      }
  

        // find   = el
        // filter = []  


  selsecteId = 0
   productsarr  :Product[] =[]

   selectedProdut!: Product 


  // activatedRoute
     

}
