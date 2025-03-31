import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { lorem } from 'faker';
import { FormsModule } from '@angular/forms'; // Add FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typingChallenge';
  randomText = lorem.sentence(4,3);
  userEnteredText = '';
  answeredRight = false;

  checkEnteredChar(event: Event){
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const userEnteredText = target.value; // Safely access the value property
    
    console.log(userEnteredText);

    if(userEnteredText == this.randomText){
      this.answeredRight = true;
    }
    else{
      this.answeredRight = false;
    }
  }

  compare(randomLetter: string, enteredLetter: string)
  {
    if(!enteredLetter)
    {
      return 'pending';
    }
    return randomLetter===enteredLetter ? 'correct' : 'incorrect';
  }
}
