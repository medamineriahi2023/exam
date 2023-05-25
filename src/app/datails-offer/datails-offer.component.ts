import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecrutementService} from "../services/recrutement.service";
import {Offer} from "../models/Offer";

@Component({
  selector: 'app-datails-offer',
  templateUrl: './datails-offer.component.html',
  styleUrls: ['./datails-offer.component.css']
})
export class DatailsOfferComponent implements OnInit{
        id: any;

        offer:Offer;
        constructor(private activatedRoute: ActivatedRoute,
                    private recrutmentService:RecrutementService) {
         this.id=  activatedRoute.snapshot.paramMap.get("id");
        }

  ngOnInit(): void {
          this.recrutmentService.getById(this.id).subscribe(e=> {this.offer = e;} );
  }


}
