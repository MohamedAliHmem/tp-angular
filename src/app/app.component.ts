import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agular_Keycloak_depart';

  public profile? : KeycloakProfile;

  constructor(public keycloakService : KeycloakService) {
  }

  async ngOnInit() {
      let res = this.keycloakService.isLoggedIn();
    console.log("res "+res) ;
      if (await res)
    this.keycloakService.loadUserProfile().then(profile=>{
           this.profile=profile;
          });
    
  }

  onLogout() {
    this.keycloakService.logout(window.location.origin);
  }

  async onLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }
}
