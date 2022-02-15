import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User;
  constructor(private userService:UserService,  private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    
  }
  signUp(){
    console.log(this.user);
    this.userService.register(this.user).subscribe({
      next: res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      console.log("user :",res)
      this.router.navigate(['/']);
    },
    error: err => {
      this._snackBar.open(err, "Close", {
        duration: 2000
      });
    }})
  }
}
