import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../shared/user-model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileModel: UserModel;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService) {
  }

  ngOnInit() {
    const userId = +this._route.snapshot.params['id'];
    this.profileModel = this._userService.getUserById(userId);
  }

  onSubmit(param) {
    console.log(param);
  }
}
