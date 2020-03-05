import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
    userName = '';
    password = '';
    ShowSignedUp = false;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {

        console.log({ ...this })
    }

    ngOnDestroy(): void {
        console.log('is destroyed')
    }

    SignUp(): void {
        const payload = {
            userName: this.userName,
            password: this.password,
        };

        console.log(payload)
    }
    

    toggleSignUp(): void {
        this.userName = '',
        this.password = '',

        this.ShowSignedUp = !this.ShowSignedUp;
    }

    login(): void {
        this.authService.login(this.userName, this.password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                console.log('username/password incorrect');
            },
        );
    }
}
