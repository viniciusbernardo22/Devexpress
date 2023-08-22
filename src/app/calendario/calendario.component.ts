import { CalendarioService, Appointment } from './calendario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  appointments: Appointment[];
  constructor(private CalendarioService: CalendarioService) {
    this.appointments = this.CalendarioService.getAppointments();
    debugger;
  }
  ngOnInit(): void {}
}
