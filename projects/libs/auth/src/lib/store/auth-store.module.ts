import { NgModule } from '@angular/core';

import * as fromUser from './user/user.reducer';
import * as fromEffects from './user/user.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature( fromUser.userFeatureKey, fromUser.reducer ),
    EffectsModule.forFeature([ fromEffects.UserEffects ])
  ]
})
export class AuthStoreModule { }
