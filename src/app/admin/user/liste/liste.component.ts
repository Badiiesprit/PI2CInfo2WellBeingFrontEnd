import { Component } from '@angular/core';
import { UserService } from '../../../services/admin/user/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../../../services/token/token.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  users: any[] = [];
  token: string;


  constructor(
    private userService: UserService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.userService.get().subscribe(
        (data: any[]) => {
          this.users = data;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );

    }
    getGenderLabel(gender: string): string {
      if (gender === 'h') {
        return 'Homme';
      } else if (gender === 'f') {
        return 'Femme';
      } else {
        return '-';
      }
    }

    disableUser(user: any) {
      this.userService.disableUser(user._id).subscribe(
        () => {
          console.log('User disabled successfully');
          // location.reload();
        },
        (error) => {
          console.error('Error disabling user:', error);
        }
      );
    }
    

    updateUser(user: any) {
      this.route.navigate(['update', user._id]);
    }

}
