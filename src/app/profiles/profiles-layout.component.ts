import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profiles-layout',
  template: `
  <header>
  <div class="row">
    <div class="col-4">
      <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
        <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
        <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
        <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
        <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
        <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <h4 id="simple-list-item-1">Item 1</h4>
        <p>...</p>
        <h4 id="simple-list-item-2">Item 2</h4>
        <p>...</p>
        <h4 id="simple-list-item-3">Item 3</h4>
        <p>...</p>
        <h4 id="simple-list-item-4">Item 4</h4>
        <p>...</p>
        <h4 id="simple-list-item-5">Item 5</h4>
        <p>...</p>
      </div>
    </div>
  </div>
  </header>`,// Define your encapsulated styles here
  encapsulation: ViewEncapsulation.Emulated, // Use Emulated encapsulation
})
export class ProfilesLayoutComponent {}

