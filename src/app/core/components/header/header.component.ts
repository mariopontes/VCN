import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedPersonId = '';
  items = [{
    'id': '5a15b13c36e7a7f00cf0d7cb',
    'index': 2,
    'isActive': true,
    'picture': 'http://placehold.it/32x32',
    'age': 23,
    'name': 'Karyn Wright',
    'gender': 'female',
    'company': 'ZOLAR',
    'email': 'karynwright@zolar.com',
    'phone': '+1 (851) 583-2547'
  },
  {
    'id': '5a15b13c2340978ec3d2c0ea',
    'index': 3,
    'isActive': false,
    'picture': 'http://placehold.it/32x32',
    'age': 35,
    'name': 'Rochelle Estes',
    'disabled': true,
    'gender': 'female',
    'company': 'EXTRAWEAR',
    'email': 'rochelleestes@extrawear.com',
    'phone': '+1 (849) 408-2029'
  },
  {
    'id': '5a15b13c663ea0af9ad0dae8',
    'index': 4,
    'isActive': false,
    'picture': 'http://placehold.it/32x32',
    'age': 25,
    'name': 'Mendoza Ruiz',
    'gender': 'male',
    'company': 'ZYTRAX',
    'email': 'mendozaruiz@zytrax.com',
    'phone': '+1 (904) 536-2020'
  },]

  constructor() { }

  ngOnInit() {
  }

}
