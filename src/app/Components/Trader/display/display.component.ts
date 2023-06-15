import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITrader } from 'src/app/Core/Models/Trader';
import { TraderService } from 'src/app/Core/Services/traders.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  traders: ITrader[] = [];
  isError: boolean = false;
  constructor(private traderService: TraderService) { }

  ngOnInit(): void {
    this.traderService.getAll().subscribe({
      next:(data) => {
        this.traders = data;
      },
      error:(err)=>{
        this.isError = true;
        console.log(err);
      }
    });
  }
}
