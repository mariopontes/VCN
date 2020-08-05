import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from '../../services/request-generic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private requestService: RequestGenericService,
  ) { }

  ngOnInit() {
  }

}
