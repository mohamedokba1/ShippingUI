import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/Employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  employees: Employee[] = [
    new Employee(
      '1',
      'Ali',
      'Ali@gmail.com',
      '12345',
      'cairo',
      'manager',
      true
    ),
    new Employee(
      '1',
      'Ali',
      'Ali@gmail.com',
      '12345',
      'cairo',
      'manager',
      false
    ),
    new Employee(
      '1',
      'Ali',
      'Ali@gmail.com',
      '12345',
      'cairo',
      'manager',
      false
    ),
    new Employee(
      '1',
      'Ali',
      'Ali@gmail.com',
      '12345',
      'cairo',
      'manager',
      true
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
