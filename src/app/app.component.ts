import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxWcdUiComponent } from 'ngx-wcd-ui';
import { AccordionComponent } from "../../projects/ngx-wcd-ui/src/lib/accordion/accordion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxWcdUiComponent, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-kit-draft';
}
