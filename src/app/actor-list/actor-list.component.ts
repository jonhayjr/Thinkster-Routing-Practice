import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActorListService } from './actor-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-actor-list-view',
  templateUrl: './actor-list.component.html',
  styles: [  ]
})
export class ActorListComponent  {
  actors
  showDetails;
  
  constructor(private actorListService: ActorListService, private router: ActivatedRoute) {
    
  }

  ngOnInit() {
      // if show details is in query params
      this.router.queryParamMap
      .subscribe(qps => {
        if (qps.has('showDetails')) {
          this.showDetails = true;
        } else {
          this.showDetails = false;
        }
      })

    this.actorListService.getActorList()
    .subscribe(actors => {
      this.actors = actors;
    })

    
  }


}