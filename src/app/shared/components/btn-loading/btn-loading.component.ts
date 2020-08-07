import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss']
})
export class BtnLoadingComponent implements OnInit {
  @Input() title = 'Salvar';
  @Input() loading = false;
  @Input() disable = false;

  constructor() { }

  ngOnInit() {
  }

}
