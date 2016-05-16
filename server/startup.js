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
                  image: ""
                },{
                  _id: 2,
                  name: "Marketing",
                  image:""
                },{
                  _id: 3,
                  name: "Entrepreneurship",
                  image:""
                },{
                  _id: 4,
                  name: "Leadership and Management",
                  image:""
            }]
          },{
            name: "Arts and Humanities",
            image: "./topics/art&humanities.png",
            subtopics: [{
              _id: 5,
              name: "History",
              image: ""
            },{
              _id: 6,
              name: "Philosophy",
              image:""
            },{
              _id: 7,
              name: "Music and Art",
              image:""
            }]
        },{
            name: "Computer Science",
            image: "./topics/computerscience.png",
            subtopic: [{
                _id: 8,
                name: "Software Developer",
                image: ""
            },{
                _id: 9,
                name: "Algorithms",
                image:""
            },{
                _id: 10,
                name: "Mobile and Web Development",
                image:""
            },{
                _id: 11,
                name: "Computer Security and Networks",
                image:""
            }]
        },{
            name: "Data Science",
            image: "./topics/datascience.png",
            subtopic: [{
                _id: 12,
                name: "Data Analysis",
                image: ""
            },{
                _id: 13,
                name: "Machine Learning",
                image:""
            },{
                _id: 14,
                name: "Probability and Statistics",
                image:""
            }]
        },{
            name: "Math & Logic",
            image: "./topics/math&logic.png",
            subtopic: [{
                _id: 15,
                name: "Calculus",
                image: ""
            },{
                _id:16,
                name: "Game Theory",
                image:""
            },{
                _id: 17,
                name: "Probability and Statistics",
                image:""
            }]
        },{
            name: "Social Sciences",
            image: "./topics/socialsciences.png",
            subtopic: [{
                _id: 18,
                name: "Economics",
                image: ""
            },{
                _id: 19,
                name: "Education",
                image:""
            },{
                _id: 20,
                name: "Law",
                image:""
            },{
                _id: 21,
                name: "Psychology",
                image:""
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


/*Meteor.publish("users", function() {
    return Meteor.users.find();
});
Meteor.publish("chats", function() {
    if (this.userId) {
        return Chats.find();

    }
    return;
});
Meteor.publish('emojis', function() {
  return Emojis.find();
});
*/
