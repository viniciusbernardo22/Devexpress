import { Injectable } from '@angular/core';

export class Appointment {
  title: string;
  startDate: Date;
  endDate: Date;
  dayLong?: boolean;
  recurrence?: string;

  constructor(
    title: string,
    startDate: Date,
    endDate: Date,
    dayLong: boolean,
    recurrence: string
  ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.dayLong = dayLong;
    this.recurrence = recurrence;
  }
}

const appointments: Appointment[] = [
  {
    title: 'Install New Database',
    startDate: new Date('2021-08-23T08:45:00.000Z'),
    endDate: new Date('2021-08-23T09:45:00.000Z'),
  },
  {
    title: 'Create New Online Marketing Strategy',
    startDate: new Date('2023-08-24T09:00:00.000Z'),
    endDate: new Date('2023-08-24T11:00:00.000Z'),
  },
  {
    title: 'Upgrade Personal Computers',
    startDate: new Date('2023-08-24T10:15:00.000Z'),
    endDate: new Date('2023-08-24T13:30:00.000Z'),
  },
  {
    title: 'Customer Workshop',
    startDate: new Date('2023-08-24T08:00:00.000Z'),
    endDate: new Date('2023-08-24T10:00:00.000Z'),
    dayLong: true,
    recurrence: 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10',
  },
  {
    title: 'Prepare Development Plan',
    startDate: new Date('2023-08-24T08:00:00.000Z'),
    endDate: new Date('2023-08-24T10:30:00.000Z'),
  },
  {
    title: 'Testing',
    startDate: new Date('2023-08-24T09:00:00.000Z'),
    endDate: new Date('2023-08-24T10:00:00.000Z'),
    recurrence: 'FREQ=WEEKLY;INTERVAL=2;COUNT=2',
  },
  {
    title: 'Meeting of Instructors',
    startDate: new Date('2023-08-24T10:00:00.000Z'),
    endDate: new Date('2023-08-24T11:15:00.000Z'),
    recurrence: 'FREQ=DAILY;BYDAY=WE;UNTIL=20211001',
  },
  {
    title: 'Recruiting students',
    startDate: new Date('2023-08-24T08:00:00.000Z'),
    endDate: new Date('2023-08-24T09:00:00.000Z'),
    recurrence: 'FREQ=YEARLY',
  },
  {
    title: 'Monthly Planning',
    startDate: new Date('2023-08-24T09:30:00.000Z'),
    endDate: new Date('2023-08-24T10:45:00.000Z'),
    recurrence: 'FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1',
  },
  {
    title: 'Open Day',
    startDate: new Date('2023-08-24T09:30:00.000Z'),
    endDate: new Date('2023-08-24T19:00:00.000Z'),
  },
];

@Injectable({
  providedIn: 'root',
})
export class CalendarioService {
  getAppointments(): Appointment[] {
    return appointments;
  }
}
