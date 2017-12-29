import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ah-mock-ngclass',
  template: `
    <div [ngClass]="currentClasses">The class binding is special</div>
  `,
  styles: [`
    .special {
      background-color: #ff0;
    }
    .modified {
      text-decoration: underline;
    }
    .saveable {
      color: #f00;
    }
  `]
})
export class MockNgClassComponent implements OnInit {
  @Input() public isSpecial = false;
  @Input() public isUnchanged = false;
  @Input() public canSave = false;
  currentClasses: any;

  ngOnInit() {
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }
}
