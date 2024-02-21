import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/auth/auth.service';
import * as fromRoot from '../../app.reducer';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit{

  @Output()
  closeSidenav = new EventEmitter<void>();

  isAuth$ = new Observable<boolean>();
  //authSubcription !: Subscription;

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) {

  }
 
  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);

    // this.authSubcription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  // ngOnDestroy() {
  //   this.authSubcription.unsubscribe();
  // }

}
