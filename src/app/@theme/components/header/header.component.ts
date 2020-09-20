import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService } from '@nebular/theme';

// import { UserData } from '../../../@core/data/users';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LayoutService } from '../../../@core/utils/indexs';

import { NbAuthJWTToken, NbAuthService, NbTokenService } from '@nebular/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;

  user: {
    name: string;
    picture: string;
  };

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [
    { title: 'Profile', icon: 'fa fa-user' },
    { title: 'Settings', icon: 'fa fa-gear' },
    { title: 'Log out', icon: 'fa fa-sign-out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private tokenService: NbTokenService,
              private router: Router,
              // private userService: UserData,
              private layoutService: LayoutService,
              private authService: NbAuthService,
              private breakpointService: NbMediaBreakpointsService) {
                this.authService.onTokenChange()
                  .subscribe((token: NbAuthJWTToken) => {
                    if (token.isValid()) {
                      this.user = token.getPayload();
                    }
                  });
  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

    this.menuService.onItemClick()
        .subscribe((event) => {
          this.onContecxtItemSelection(event.item.title);
        });
  }

  onContecxtItemSelection(title: string): void {
    if (title === 'Log out') {
      this.tokenService.clear() // exclui o token do local storage do navegador
        .subscribe(() => {
          this.router.navigate(['auth/login']);
        });

      this.authService.logout('email') // Envia uma requisição para o servidor api
        .subscribe((event) => {
          // console.log(event);
          if (event.isSuccess) {
            // console.log('OK');
            // console.log(event.getMessages);
          }
        });
    }

    if (title === 'Settings') {
      this.authService.resetPassword('email', { newPassword: '1234567' });
      this.router.navigate(['auth/resetpassword']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // changeTheme(themeName: string) {
  //   this.themeService.changeTheme(themeName);
  // }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome(): any {
    this.menuService.navigateHome();
    return false;
  }

  onLogout(): void {
    this.authService.logout('email');
  }

}
