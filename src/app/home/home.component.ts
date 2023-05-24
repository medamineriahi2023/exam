import {Component, OnInit} from '@angular/core';
import {RecrutementService} from "../services/recrutement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  offres : any[];
  constructor(private recrutementService :RecrutementService) {
  }

  ngOnInit(): void {
      this.recrutementService.getAllOffres().subscribe(e=> this.offres = e );
  }

  updateCandidate(offer:any) {
    offer.nbCandidate --;
    this.recrutementService.updateOffer(offer.id, offer).subscribe(e => console.log(e));
  }

}
