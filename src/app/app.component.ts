import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angDemo';

  cards = [
    {
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
        disabled:true
      },
      ps: {
        psa: "Dedicated",
        disabled:true
      },
      sd: {
        sda: "Free",
        disabled:true
      },
      sr: {
        rp: "Monthly",
        disabled:true
      }
    },
    {
      title: "PLUS",
      price: 9,
      user: {
        UA: "5 Users",
      },
      storage: {
        size: 50,
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
        disabled:true
      }

    },
    {
      title: "PRO",
      price: 49,
      user: {
        UA: "Unlimited Users",
      },
      storage: {
        size: 150,
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

    }

  ]
}

