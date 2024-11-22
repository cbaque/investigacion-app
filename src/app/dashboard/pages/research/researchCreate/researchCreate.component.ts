import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UsersService } from '@services/users/users.service';
import { UserDataI, UsersI } from '@interfaces/UsersI';

@Component({
  selector: 'app-research-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    NzPageHeaderModule,
    NzStepsModule,
    NzAlertModule,
    NzSliderModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    FormsModule
  ],
  templateUrl: './researchCreate.component.html',
  styleUrl: './researchCreate.component.css',
})
export class ResearchCreateComponent implements OnInit { 

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private userSrv = inject(UsersService)

  public currentStep = 0;
  public members: UserDataI[] | null = null;

  researchForm = this.formBuilder.group({
    code: [ '', [Validators.required] ],
    name_project: [ '', [ Validators.required] ],
    faculty: [ '' ],
    rcu: [ '' ],
    duration: [ '' ],
    advance: [ 0 ],
    impact: [ '' ],
    members: [ [] ],
    observation: [ '' ],
    budget_1: [ '' ],
    budget_2: [ '' ],
    budget_3: [ '' ],
    status: [ 'E' ],
  });

  onBackInvestigation() {
    this.router.navigate(["/dashboard/investigation"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  public loadMembers() {
    this.userSrv.get()
    .subscribe(  
      (res: UsersI) => { 
        const users = res.data;
        this.members =  users.filter(user => user.roles.some(role => role.name === 'researcher'));
      }
    )
  }


  get advanceControl(): FormControl {
    return this.researchForm.get('advance') as FormControl;
  }

  submitNewResearch() {
    const controls = this.researchForm.value
    console.log(controls)
  }

}




