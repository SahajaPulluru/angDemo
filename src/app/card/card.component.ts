import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() myData = {
    title: "FREE",
    price: 0,
    user: {
      UA: "Single User",
    },
    storage: {
      size: 5,
    },
    pp: {
      ppa: "Unlimited",
    },
    ca: {
      caa: "Community Access",
    },
    Upp: {
      UPPA: "Unlimited",
      disabled:false
    },
    ps: {
      psa: "Dedicated",
      disabled:false
    },
    sd: {
      sda: "Free",
      disabled:false
    },
    sr: {
      rp: "Monthly",
      disabled:false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
