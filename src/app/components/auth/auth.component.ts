import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, 
              private router: Router, 
              private toastr: ToastrService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if(response != null && response.length != 0){
          console.log('Login successful', response);
          this.toastr.success('you are connected !');
          this.router.navigate(['/home']);
        }
        else {
          this.toastr.warning("coudn't Login...");
          this.toastr.error('Une erreur s\'est produite lors de la connexion.', 'Login error');
        }
        
      },
      error: (error: any) => {
        this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de la connexion.';
        console.error('Login error', error);
        this.toastr.error('Une erreur s\'est produite lors de la connexion.', 'Login error');
      },
    });
  }
}
