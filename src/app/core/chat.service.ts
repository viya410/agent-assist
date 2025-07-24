import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  ngOnInit(): void { }
    //my knowledge base
    //possible questions
    library = [
        ["hello!", "hi", "hey"],
        ["how are you", "how you doing", "how is it going", "how are things"],
        ["what are you doing", "what you up to", "what is going on", "what is up"],
        ["what is your age", "how old are you"],
        ["who are you", "are you human", "are you a bot"],
        ["what is your name", "what are you called"],
        ["i am bored", "bored"],
        ["tell me joke"],
        ["maybe", "no thanks"],
        ["lol"],
        ["okay"],
        ["bye", "talk to you later"],
        ["i feel sad", "i am depressed"],
        ["suggest me some songs", "song"],
        ["suggest me some books"],
        ["thriller"],
        ["horror"],
        ["romance"],
        ["good"],
        [""]
    ];
    //respective answers
    replies = [
        ["Hello!", "Hi there!", "Hey!", "Good morning to you too!", "Howdy"],
        [
            "I'm splendid",
            "I'm good, how are you?",
            "I'm doing fine, how are you?",
            "Fantastic, what's up?"
        ],
        [
            "Waiting to help you!",
            "Nothing much, what about you?",
            "Take a guess",
            "Not too much.  How's your day going?"
        ],
        [
            "How old do you think I am?",
            "What makes you think I age?"
        ],
        [
            "I'm a bot Vishnu Priya created",
            "No I'm a virtual assistant",
            "You guessed it right!"
        ],
        [
            "I'm called Chikky the Chatbot!",
            "My name is Chikky"
        ],
        [
            "I'm sorry to hear that, why don't you learn something new?",
            "You can talk to me!"
        ],
        [
            "Well here it is: What should you watch on a dinner date? Kabhi Khushi Kabhi Rum 😂",
            "What does an actor think while asking if there's anyone in the house? : For the ghost to reply yes did, the maggi will be ready shortly"
        ],
        [
            "Well tell me when you decide",
            "Alright then"
        ],
        [
            "😊"
        ],
        [
            "Okay see you later!"
        ],
        [
            "Sure! Have a nice day!",
            "Okay :)"
        ],
        [
            "I'm sorry, what can I do to help you",
            "Just know this feeling will pass, tell me how I can help"
        ],
        [
            "Love you zindagi! from Dear Zindagi",
            "The night changes by One Direction",
            "Hoyna hoyna from Gang Leader"
        ],
        [
            "Sure, tell me what genre would you are in mood for"
        ],
        [
            "Here are some suggestions for thriller: Girl on the Train by Paula Hawkins, Woman in the window by A.J. Finn"
        ],
        [
            "Here are some suggestions for horror: The Exorcist by W. P. Blatty, The Shining by Stephan King"
        ],
        [
            "Here are some suggestions for romance: P. S. I love you by Cecelia Ahern, Pride & Prejudice by Jane Austen"
        ],
        [
            "Good😃"
        ],
        [
            "Please type something :("
        ]
    ];
    //default answer
    defaultAnswer = ["Ask me something else", "Can you please rephrase"];
    //knowledge base ends


    //compare function
    compare(string: any) {
        let item;
        let replyFound = false;
        for (let i = 0; i < this.library.length; i++) {
            for (let j = 0; j < this.library[i].length; j++) {
                if (this.library[i][j] === string) {
                    let items = this.replies[i];
                    items = this.replies[i];
                    item = items[Math.floor(Math.random() * items.length)];
                    replyFound = true;
                    break;
                }
                else {
                    item = this.defaultAnswer[Math.floor(Math.random() * this.defaultAnswer.length)];
                }
            }
            if (replyFound) {
                break;
            }
        }
        return item;
    }

    //function to create and append seperate div under parent element
    takeChatInput(parentElement: ElementRef, userInput: any, botReply: any): void {
      const msg = document.getElementById('msgs');
      let userDiv = document.createElement('div');
      userDiv.id = 'user';
      userDiv.className = 'userResponse';
      userDiv.innerHTML = `${userInput}`;
      msg!.appendChild(userDiv);

      let botDiv = document.createElement('div');
      let botText = document.createElement('span');
      botDiv.id = 'bot';
      botDiv.className = 'botResponse';
      botDiv.appendChild(botText);
      botText.innerText = `${botReply}`
      parentElement.nativeElement.appendChild(botDiv);

      parentElement.nativeElement.scrollTop = parentElement.nativeElement.scrollHeight - parentElement.nativeElement.clientHeight;

  }


    //writing function to get relevant answers from knowledge base for questions
    getKBData(): KBEntry[] {
        const kbData: KBEntry[] = [];
        //to traverse through the arrays of library, replies and defaultAnswer
        for (let i = 0; i < this.library.length; i++) {
            const entry: KBEntry = {
                library: this.library[i],
                replies: this.replies[i],
                defaultAnswer: this.defaultAnswer[i]
            };
            kbData.push(entry);
        }
        return kbData;
    }
}
export interface KBEntry {
    library: string[];
    replies: string[];
    defaultAnswer: string;
}