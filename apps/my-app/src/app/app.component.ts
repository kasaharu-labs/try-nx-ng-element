import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Injector,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MyHeaderComponent } from '../../../../my-lib/src';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    const headerElement = createCustomElement(MyHeaderComponent, {
      injector: inject(Injector),
    });
    customElements.define('my-header-element', headerElement);
  }

  title = 'my-app';
}
