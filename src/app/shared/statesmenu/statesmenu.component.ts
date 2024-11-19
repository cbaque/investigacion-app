import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateData, StateI } from '@interfaces/StateI';
import { StateService } from '@services/states/state.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-statesmenu',
  standalone: true,
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule
  ],
  templateUrl: './statesmenu.component.html'
})
export class StatesmenuComponent implements OnInit { 

  private stateSrv = inject(StateService)
  public states: StateI[] | null = this.stateSrv.currentStates();
  private router = inject(Router)

  ngOnInit(): void {
    
    if (this.states?.length == 0 || !this.states) {
      this.loadStates();
    }
  }

  public loadStates() {
    this.stateSrv.get()
    .subscribe(  
      (res: StateData) => { 
        this.stateSrv.setCurrentStatesValue(res.data);
        this.states = res.data;
        localStorage.setItem('sigestates', JSON.stringify(res.data));
      }
    ) 
  }

  goToStates() : void {
    this.router.navigate(["/dashboard/states"]);
  }


}
