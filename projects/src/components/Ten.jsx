import React, { useState } from "react";

const Ten = () => {
  const animeQuotes = [
    "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
    "If you don’t take risks, you can’t create a future! – Monkey D. Luffy, One Piece",
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    "A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    "In our society, letting others find out that you’re a nice person is a very risky move. It’s extremely likely that someone would take advantage of that. – Hitagi Senjougahara, Bakemonogatari",
    "It's not the face that makes someone a monster; it's the choices they make with their lives. – Naruto Uzumaki, Naruto",
    "Power comes in response to a need, not a desire. You have to create that need. – Goku, Dragon Ball Z",
    "I am not a hero because I want your approval. I do it because I want to! – Izuku Midoriya, My Hero Academia",
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki, Naruto",
    "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
    "If you don’t share someone’s pain, you can never understand them. – Nagato, Naruto",
    "Sometimes good people make bad choices. It doesn’t mean they are bad people. It means they are human. – Kishou Arima, Tokyo Ghoul",
    "If you can’t do something, then don’t. Focus on what you can do. – Shiroe, Log Horizon",
    "Don’t beg for it, earn it. – Aomine Daiki, Kuroko no Basuke",
    "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. – Kenshin Himura, Rurouni Kenshin",
    "Life is not a game of luck. If you wanna win, work hard. – Sora, No Game No Life",
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    "Fear is not evil. It tells you what your weakness is. – Gildarts Clive, Fairy Tail",
    "You can’t sit around envying other people’s worlds. You have to go out and change your own. – Shinichi Chiaki, Nodame Cantabile",
    "You can’t change the past, but you can always change the future. – Rintarou Okabe, Steins;Gate",
    "People’s lives don’t end when they die, it ends when they lose faith. – Itachi Uchiha, Naruto",
    "You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want. – Ging Freecss, Hunter x Hunter",
    "No one knows what the future holds. That’s why its potential is infinite. – Rintarou Okabe, Steins;Gate",
    "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face. – Roronoa Zoro, One Piece",
    "The only thing we’re allowed to do is to believe that we won’t regret the choice we made. – Levi Ackerman, Attack on Titan",
    "There are no regrets. If one can be proud of one’s life, one should not wish for another chance. – Saber, Fate/Stay Night",
    "If you don’t take risks, you can’t create a future! – Monkey D. Luffy, One Piece",
    "If you can’t find a reason to fight, then you shouldn’t be fighting. – Akame, Akame Ga Kill",
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki, Naruto",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar. – Monkey D. Luffy, One Piece",
    "If you don’t share someone’s pain, you can never understand them. – Nagato, Naruto",
    "The world isn’t perfect. But it’s there for us, doing the best it can. And that’s what makes it so damn beautiful. – Roy Mustang, Fullmetal Alchemist",
    "Sometimes you have to sit back and watch someone make a mistake, and get hurt. Don’t take away their pain. Because they need it. – Yuki Sohma, Fruits Basket",
    "You can’t sit around envying other people’s worlds. You have to go out and change your own. – Shinichi Chiaki, Nodame Cantabile",
    "You can’t change the past, but you can always change the future. – Rintarou Okabe, Steins;Gate",
    "The world is not beautiful, therefore it is. – Kino, Kino’s Journey",
    "Hard work is worthless for those that don’t believe in themselves. – Naruto Uzumaki, Naruto",
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    "The future belongs to those who believe in the beauty of their dreams. – Shoyo Hinata, Haikyuu",
    "We are all like fireworks: We climb, we shine, and always go our separate ways and become further apart. But even if that time comes, let’s not disappear like a firework, and continue to shine... forever. – Hitsugaya Toshiro, Bleach",
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    "A place where someone still thinks about you is a place you can call home. – Jiraiya, Naruto",
    "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face. – Roronoa Zoro, One Piece",
    "The only thing we’re allowed to do is to believe that we won’t regret the choice we made. – Levi Ackerman, Attack on Titan",
    "Sometimes good people make bad choices. It doesn’t mean they are bad people. It means they are human. – Kishou Arima, Tokyo Ghoul",
    "Don’t beg for it, earn it. – Aomine Daiki, Kuroko no Basuke",
    "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. – Kenshin Himura, Rurouni Kenshin",
    "Life is not a game of luck. If you wanna win, work hard. – Sora, No Game No Life",
    "You can’t sit around envying other people’s worlds. You have to go out and change your own. – Shinichi Chiaki, Nodame Cantabile",
    "Fear is not evil. It tells you what your weakness is. – Gildarts Clive, Fairy Tail",
  ];

  const randomNumber = Math.floor(Math.random() * animeQuotes.length);
  const quote = animeQuotes[randomNumber]

  return <h1 style={{fontSize:"1.8rem"}}>{quote}</h1>;
};

export default Ten;
