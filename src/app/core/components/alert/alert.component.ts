import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AlertService } from '../../services/alert.service';
import { switchMap, tap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('alert-visibility', [
      state('hidden', style({
        opacity: 0,
        top: '-60px'
      })),
      state('visible', style({
        opacity: 1,
        top: '80px'
      })),
      transition('hidden => visible', animate('300ms 0s ease-in')),
      transition('visible => hidden', animate('300ms 0s ease-out'))
    ])
  ]
})
export class AlertComponent implements OnInit {

  alertState = 'hidden';
  messageSuccess: string = 'Mensagem de sucesso';
  alertType: any;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.notifier.pipe(
      tap(event => {
        this.alertType = event.type;
        this.messageSuccess = event.message;
        this.alertState = 'visible';
      }),
      switchMap(() => timer(4000)) // troca o Observable, faz o unsubscribe se houver Observable anterior ativo
    ).subscribe(() => this.alertState = 'hidden')
  }

}
