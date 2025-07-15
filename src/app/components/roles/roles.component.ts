import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
// string, number, array, null, undefined, object, boolean, date
  fullname = "Esraa Alshaikh"
  firstname = "Maria"
  lastname = "Khalil"
  inputType = "Enter Type Name"
}
