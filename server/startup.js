import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
      if (!Topics.findOne()) {
        let topics = [
          {
              name: "Business & Management",
              image: "./topics/business&management.png",
              subtopics: [{
                  _id: 1,
                  name: "Finance",
                  image: "./topics/finance.png"
                },{
                  _id: 2,
                  name: "Marketing",
                  image:"./topics/marketing.png"
                },{
                  _id: 3,
                  name: "Entrepreneurship",
                  image:"./topics/entrepreneurship.png"
              }]
          },{
            name: "Arts and Humanities",
            image: "./topics/art&humanities.png",
            subtopics: [{
              _id: 5,
              name: "History",
              image: "./topics/history.png"
            },{
              _id: 6,
              name: "Philosophy",
              image:"./topics/philosophy.png"
            },{
              _id: 7,
              name: "Music & Art",
              image:"./topics/music.png"
            }]
        },{
            name: "Computer Science",
            image: "./topics/computerscience.png",
            subtopics: [{
                _id: 8,
                name: "Software Developer",
                image: "./topics/software.png"
            },{
                _id: 10,
                name: "Mobile & Web Development",
                image:"./topics/mobile.png"
            },{
                _id: 11,
                name: "Computer Security & Networks",
                image:"./topics/security.png"
            }]
        },{
            name: "Data Science",
            image: "./topics/datascience.png",
            subtopics: [{
                _id: 12,
                name: "Data Analysis",
                image: "./topics/analysis.png"
            },{
                _id: 13,
                name: "Machine Learning",
                image:"./topics/machine.png"
            },{
                _id: 14,
                name: "Statistics",
                image:"./topics/statistics.png"
            }]
        },{
            name: "Math & Logic",
            image: "./topics/math&logic.png",
            subtopics: [{
                _id: 15,
                name: "Calculus",
                image: "./topics/calculus.png"
            },{
                _id:16,
                name: "Game Theory",
                image:"./topics/game.png"
            },{
                _id: 17,
                name: "Probability",
                image:"./topics/probability.png"
            }]
        },{
            name: "Social Sciences",
            image: "./topics/socialsciences.png",
            subtopics: [{
                _id: 18,
                name: "Economics",
                image: "./topics/economics.png"
            },{
                _id: 19,
                name: "Education",
                image:"./topics/education.png"
            },{
                _id: 20,
                name: "Law",
                image:"./topics/law.png"
            }]
      }];
      for (let i = 0; i < topics.length; i+=1) {
            console.log("creating Topics");
            Topics.insert({
                name: topics[i].name,
                image: topics[i].image,
                subtopics: topics[i].subtopics
            });
      }
    }
});


Meteor.publish("users", function() {
    return Meteor.users.find();
});
Meteor.publish("topics", function() {
    return Topics.find();
});
Meteor.publish("chats", function() {
    if (this.userId) {
        return Chats.find();
    }
    return;
});

/*
Meteor.publish('emojis', function() {
  return Emojis.find();
});
*/
