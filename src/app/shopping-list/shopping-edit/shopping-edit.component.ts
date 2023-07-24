import { Component, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('amountInput') amountInput: ElementRef
@ViewChild('nameInput') nameInput: ElementRef

@Output() gradientAction = new EventEmitter<{nameInput: string, amountInput: number, action: string}>()

onGredientAction(action: string) {
  this.gradientAction.emit({nameInput: this.nameInput.nativeElement.value, amountInput: this.amountInput.nativeElement.value, action: action});
}

onClear() {
  this.nameInput.nativeElement.value = ''
  this.amountInput.nativeElement.value = ''
}



}
