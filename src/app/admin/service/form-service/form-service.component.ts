import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss']
})
export class FormServiceComponent {
  public favoriteColor = '#26ab3c';
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  service: Service;
  action: string;


  constructor(
    private serviceService: ServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }




  ngOnInit(): void {
    this.service = new Service();
    this.action = 'add';
  }




   save() {
    if (this.action == 'add') {

      console.log(this.service);

      this.serviceService.add(this.service).subscribe(() => {
        this.route.navigate(['service/lister']);
      });
    } else if (this.action == 'update') {
      this.serviceService.update(this.service).subscribe(() => {
        this.route.navigate(['/list']);
      });
    }
  }


  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  onSubmit2() {
    this.browserDefaultsValidated = true;
    console.log('Submit... 2');
  }

  onReset2() {
    this.browserDefaultsValidated = false;
    console.log('Reset... 3');
  }

  onSubmit3() {
    this.tooltipValidated = true;
    console.log('Submit... 3');
  }

  onReset3() {
    this.tooltipValidated = false;
    console.log('Reset... 3');
  }
}
