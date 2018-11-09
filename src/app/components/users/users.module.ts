import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersService } from './users.service';

import { AgmCoreModule } from '@agm/core';
/**
 * Shared modules
 */
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent, UsersComponent, UserDetailsComponent],
  providers: [UsersService]
})
export class UsersModule { }
