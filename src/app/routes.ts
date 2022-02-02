import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorEditComponent } from './actor-edit.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'

export const routingTable = [
  {path: '', redirectTo: '/actors', pathMatch: 'full'},
  {path: 'actors', component: ActorListComponent},
  {path: 'actors/:id/edit', component: ActorEditComponent},
  {path:'**', component: FourOhFourComponent}

]