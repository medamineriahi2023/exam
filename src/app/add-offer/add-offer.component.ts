import { Component } from '@angular/core';
import {RecrutementService} from "../services/recrutement.service";
import {Offer} from "../models/Offer";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {

  constructor(private recrutmentService: RecrutementService) {
  }

  onSubmit(value: any) {
   this.recrutmentService.save(value).subscribe(e => console.log(e));
  }



}
