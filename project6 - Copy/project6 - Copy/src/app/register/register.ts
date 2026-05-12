import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  constructor(private api : Api, private cdr : ChangeDetectorRef){
    
  }


  showVerifyinput = false
  email = ""
  code = ""

  verify(){
   this.api.verify({
    email : this.email,
    code : this.code
   }).subscribe({
     next : (resp : any)=>{
      console.log(resp);
   },
   error : er => alert(er.message)
   
  })

}


register(form : any){
  this.api.register(form).subscribe({
    next : (resp : any)=>{
        console.log(resp);
        this.showVerifyinput = true
        this.cdr.detectChanges()
    },
    error : er => alert(er.message)
  })
}




}
