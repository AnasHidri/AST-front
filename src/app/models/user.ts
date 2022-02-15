import { DatePipe } from "@angular/common";


export class User { 
    userid:String;
   name: String;
   lastname: String;
   age: number;
   email: String;
   password: String; 
   registerdate: String;
   role: String;
   isadmin: Boolean;
    constructor() {
        this.userid= '';
        this.name='';
        this.lastname='';
        this.age=0;
        this.email='';
        this.password='';
        this.role='';
        this.registerdate= '';
        this.isadmin=false;
        
    
      }
}
