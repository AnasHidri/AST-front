import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  constructor(private userService:UserService,private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
  }
  signUp(){
    const test = new HttpParams()
    .set('username', this.user.name.toString())
    .set('password', this.user.password.toString())

    
    this.userService.logIn(test).subscribe(
      {
        next: res => {
          this._snackBar.open("Succes", "Close", {
            duration: 1000
          });
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/register';
          this.router.navigate([returnUrl]);
        },
        error: err => {
          if (err == "Bad Request") {
            this._snackBar.open("Invalid credentials", "Close", {
              duration: 2000
            });
          }
          else {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });

          }
        }
      })

  }
}
