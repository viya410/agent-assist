import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('parentElement', {static: true}) parentElement!:ElementRef;
  
  inputText: string = '';
  
  constructor(private chatService: ChatService, public authenticationService: AuthenticationService){
    
   }

  ngOnInit(): void {
console.log(this.authenticationService.getUsername())
  }

  sendMessage(): void{
    console.log('sendmessage function called');
    console.log('user input: ', this.inputText);
    if(!this.inputText&& this.inputText.trim()!=='') return;
    
      const userInput = this.inputText;
      const botReply = this.chatService.compare(userInput);
      console.log('bot reply:', botReply)

      this.chatService.takeChatInput(this.parentElement, userInput, botReply);
      this.inputText = '';
    }
  }