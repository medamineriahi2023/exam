import {Component, OnInit} from '@angular/core';
import {RecrutementService} from "../services/recrutement.service";
import {Offer} from "../models/Offer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  offres : Offer[];
  constructor(private recrutementService :RecrutementService) {
  }

  ngOnInit(): void {
    this.recrutementService.getAllOffres().subscribe(e=> this.offres = e )
  }

  postuler(offer: Offer) {
    offer.nbCandidate--;
    this.recrutementService.update(offer, offer.id).subscribe(o =>{
    this.recrutementService.getAllOffres().subscribe(offers => this.offres = offers);
    });
  }

  refresh() {
    this.recrutementService.getAllOffres().subscribe(offers => this.offres = offers);

  }
}
