import { Component, input } from '@angular/core';

@Component({
  selector: 'wcd-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  title = input<string>("");  
}
