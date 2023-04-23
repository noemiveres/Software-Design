import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Answer } from '../types/Answer';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {

  constructor() { }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }

  getMyAnswers() {
    return [
      {
        id: 192,
        author: {} as User,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: new Date("2023-04-23T12:34:56Z"),
        picture: "https://www.wallpapers13.com/wp-content/uploads/2016/02/Small-kittens-5806-1920x1200.jpg",
        question: {
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
        }
      },
      {
        id: 223,
        author: {} as User,
        text: "Nullam viverra odio ut commodo mollis.",
        creationDate: new Date("2023-04-22T09:12:34Z"),
        picture: "https://tse4.mm.bing.net/th?id=OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj&pid=Api",
        question: {id: 2,
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
      }
      },
      {
        id: 323,
        author: {} as User,
        text: "Etiam eget ligula laoreet, imperdiet ex eu, iaculis odio.",
        creationDate: new Date("2023-04-21T15:45:00Z"),
        picture: "https://thehappypuppysite.com/wp-content/uploads/2017/11/small-dog-names.jpg",
        question: {
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
      }
      },
      {
        id: 464,
        author: {} as User,
        text: "Maecenas venenatis ex vitae justo finibus, id tincidunt elit pretium.",
        creationDate: new Date("2023-04-20T11:22:00Z"),
        picture: "https://tse2.mm.bing.net/th?id=OIP.DbyafDvfvAIQY-IGxSJTrQHaE8&pid=Api",
        question: {
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
      },
      {
        id: 538,
        author: {} as User,
        text: "Praesent lacinia sapien id urna faucibus, vel congue urna elementum.",
        creationDate: new Date("2023-04-19T08:30:00Z"),
        picture: "https://tse2.mm.bing.net/th?id=OIP.1M10t5tQgAJnBA-ooJBPkwHaFW&pid=Api",
        question: {
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
        }
      },
      {
        id: 673,
        author: {} as User,
        text: "Sed fermentum purus vel sapien auctor, at congue mi volutpat.",
        creationDate: new Date("2023-04-18T16:15:00Z"),
        picture: "https://i.pinimg.com/originals/1e/53/f4/1e53f4e398a2c278f4f560ff37b3473d.jpg",
        question: {
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
        }
      }].reverse();
  }

  getAllAnswersToQuestion(){
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
        text: 'I have an answer to your question!',
        creationDate: new Date("2022-01-01"),
        picture: "https://wallpapertag.com/wallpaper/full/3/a/4/434693-cool-cute-kitten-wallpapers-1920x1200.jpg",
        question: {
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
          picture: "",
          tags: ["magic", "books"],
        }},
        {
        id: 2,
        author: {
          id: 5,
          firstName: 'Tom',
          lastName: 'Jones',
          email: 'tjones@yahoo.com',
          password: 'qwerty',
          phoneNumber: '1234567890',
          userType: 'moderator',
        },
        text: 'This is my answer to the question',
        creationDate: new Date("2022-01-03"),
        picture: "https://tse3.mm.bing.net/th?id=OIP.Mt-TDlz7p0SCTeXi7KS_iwHaE7&pid=Api",
        question: {
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
          picture: "",
          tags: ["magic", "books"],
        }
      }
    ].reverse();
  }

  addAnswer(answer: Answer) {
    // save answer to database
  }
}
