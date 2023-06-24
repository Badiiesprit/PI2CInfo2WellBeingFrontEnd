import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/admin/user/user.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  user: User = new User();

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.add(this.user).subscribe(
      (response) => {
        // L'utilisateur a été ajouté avec succès
        console.log('Utilisateur ajouté:', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
        this.user = new User();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
    );
  }
}
