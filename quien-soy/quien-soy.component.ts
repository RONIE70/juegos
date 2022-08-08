import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/models/user.models';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private githubService: GithubService) {

  }


  error: boolean = false;
  user: User = null;

  ngOnInit() {


    this.githubService.getUser().subscribe(user => this.user = user);

  }

}




