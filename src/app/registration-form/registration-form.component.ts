import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { gender, state } from 'src/gender/gender';
import { DropdownServiceService } from '../dropdown-service.service';
import { PatientService } from '../service/patient.service';
import { User } from '../User/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  user:User =new  User()
  patientForm: any;
  dropdownData!: gender[];
  dropdownStateData!:state[];

  constructor(private formBuilder: FormBuilder ,private service:PatientService,private dropdownService:DropdownServiceService) { }
   ngOnInit() {

    this.dropdownService.getDropdownData().subscribe(data => {

      this.dropdownData = data;
      console.log(this.dropdownData)

    });

    this.dropdownService.getDropdownStateData().subscribe(data => {
      this.dropdownStateData = data;
      console.log(this.dropdownStateData)

    });

      this.patientForm = new FormGroup({
        firstName: new FormControl(this.user.firstName, [
          Validators.required,
          Validators.minLength(4)
        ]),
      });

    }
         onSubmit() {
                  console.log(this.user);
                this.service.registeruser (this.user).subscribe(data=>{
                  alert("sucessfully user is created...")

                },error=>alert("error occure"))
              }
}
