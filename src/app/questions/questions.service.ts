import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Question } from '../types/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getAllQuestions() {
    return [
      {
        id: 1,
        author: {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@yahoo.com',
          password: 'password',
          phoneNumber: '1234567890',
          userType: 'regular', // or moderator
        },
        title: "Improving my programming skills?",
        text: "I want to become a better programmer, but I don't know where to start. Any tips?",
        creationDate: new Date("2022-01-01"),
        picture: "https://b.rgbimg.com/cache1wndSK/users/j/ja/jayanta32/600/oyazTSM.jpg",
        tags: ["#programming"],
      },
      {
        id: 2,
        author: {
          id: 2,
          firstName: 'Harry',
          lastName: 'Potter',
          email: 'harrypotter@yahoo.com',
          password: 'secretpwd',
          phoneNumber: '0123456789',
          userType: 'regular', // or moderator
        },
        title: "What are the best books to learn about magic?",
        text: "I'm new to magic and I want to learn more. Can anyone recommend some good books?",
        creationDate: new Date("2022-01-02"),
        picture: "https://www.w3schools.com/images/w3schools_green.jpg",
        tags: ["#magic", "#books"],
      },
      {
        id: 3,
        author: {
          id: 5,
          firstName: 'Tom',
          lastName: 'Jones',
          email: 'tjones@yahoo.com',
          password: 'qwerty',
          phoneNumber: '1234567890',
          userType: 'moderator',
        },
        title: "How do I cook the perfect steak?",
        text: "I've tried cooking steak before but it never comes out quite right. What's the secret?",
        creationDate: new Date("2022-01-03"),
        picture: "https://inveo.com.pl/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/Icon-HTTP.jpg?bwg=1577698633",
        tags: ["#cooking", "#steak"],
      },
      {
        id: 4,
        author: {
          id: 2,
          firstName: 'Harry',
          lastName: 'Potter',
          email: 'harrypotter@yahoo.com',
          password: 'secretpwd',
          phoneNumber: '0123456789',
          userType: 'regular', // or moderator
        },
        title: "What are some good exercises for beginners?",
        text: "I want to start exercising but I don't know where to begin. I thought about doing some yoga. Any suggestions?",
        creationDate: new Date("2022-01-04"),
        picture: "http://1.bp.blogspot.com/-_KCn4-gqoeQ/UebWhGeHhzI/AAAAAAAAAtw/TUCgBc2c_cA/s1600/Dolphin-In-Water.jpg",
        tags: ["#exercise", "#beginner", "#yoga"],
      },
      {
        id: 5,
        author: {
          id: 8,
          firstName: 'William',
          lastName: 'Smith',
          email: 'wsmith@yahoo.com',
          password: 'mypassword123',
          phoneNumber: '6661234567',
          userType: 'regular', // or moderator
        },
        title: "What are some common mistakes new moderators make?",
        text: "I'm new to moderating and I want to make sure I don't make any rookie mistakes. Any advice?",
        creationDate: new Date("2022-01-05"),
        picture: "http://3.bp.blogspot.com/-0IAXiJreeP8/UebWhfmAQEI/AAAAAAAAAt4/oOa85J6BhSs/s1600/Dolphin-Leap.JPG",
        tags: ["#moderating", "#advice"],
      },
      {
        id: 6,
        author: {
          id: 8,
          firstName: 'William',
          lastName: 'Smith',
          email: 'wsmith@yahoo.com',
          password: 'mypassword123',
          phoneNumber: '6661234567',
          userType: 'regular', // or moderator
        },
        title: "What's the best way to organize a charity event?",
        text: "I'm planning a charity event and I want to make sure it goes smoothly. Any tips?",
        creationDate: new Date("2022-01-06"),
        picture: "http://4.bp.blogspot.com/-yJvwuM5FrNY/UebWcEARCFI/AAAAAAAAAto/wAYcbnpSdpc/s1600/Dolphin-Facts.jpg",
        tags: ["#charity", "#event"],
      },
      {
        id: 7,
        author: {
          id: 8,
          firstName: 'William',
          lastName: 'Smith',
          email: 'wsmith@yahoo.com',
          password: 'mypassword123',
          phoneNumber: '6661234567',
          userType: 'regular', // or moderator
        },
        title: "What's the best way to get better at basketball?",
        text: "I love basketball but I'm not very good. How can I improve my skills?",
        creationDate: new Date("2022-01-07"),
        picture: "http://3.bp.blogspot.com/--0QCDyy798Y/UebWkWbEMFI/AAAAAAAAAuM/n7QFcKnXcU0/s1600/Dolphin-Swimming.jpg",
        tags: ["#basketball", "#skills"],
      },
      {
        id: 8,
        author: {
          id: 5,
          firstName: 'Tom',
          lastName: 'Jones',
          email: 'tjones@yahoo.com',
          password: 'qwerty',
          phoneNumber: '1234567890',
          userType: 'moderator',
        },
        title: "What are some good resources for learning a new language?",
        text: "I want to learn a new language but I don't know where to start. Any suggestions?",
        creationDate: new Date("2022-01-08"),
        picture: 'http://3.bp.blogspot.com/-3eYCTnQUHoU/UebWksXBgWI/AAAAAAAAAuU/rsKQIvYOHjk/s400/Dolphin-Wallpaper.jpg',
        tags: ["#language", "#learning"],
      }
    ].reverse();
  }

  getMyQuestions(){
    return [
      {
        id: 1,
        author: {} as User,
        title: "Improving my programming skills?",
        text: "I want to become a better programmer, but I don't know where to start. Any tips?",
        creationDate: new Date("2022-01-01"),
        picture: "https://b.rgbimg.com/cache1wndSK/users/j/ja/jayanta32/600/oyazTSM.jpg",
        tags: ["#programming"],
      },
      {
        id: 2,
        author: {
          id: 2,
          firstName: 'Harry',
          lastName: 'Potter',
          email: 'harrypotter@yahoo.com',
          password: 'secretpwd',
          phoneNumber: '0123456789',
          userType: 'regular', // or moderator
        },
        title: "What are the best books to learn about magic?",
        text: "I'm new to magic and I want to learn more. Can anyone recommend some good books?",
        creationDate: new Date("2022-01-02"),
        picture: "https://www.w3schools.com/images/w3schools_green.jpg",
        tags: ["#magic", "#books"],
      },
      {
        id: 3,
        author: {} as User,
        title: "How do I cook the perfect steak?",
        text: "I've tried cooking steak before but it never comes out quite right. What's the secret?",
        creationDate: new Date("2022-01-03"),
        picture: "https://inveo.com.pl/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/Icon-HTTP.jpg?bwg=1577698633",
        tags: ["#cooking", "#steak"],
      }]
  }

  addQuestion(question: Question){
    // TODO: add question to database
  }
}
