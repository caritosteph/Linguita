import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import {ProfileLayout} from '/client/layouts/mainLayout.jsx';

import Content from '/client/components/content/content.jsx';
import Navbar from '/client/components/header/navbar.jsx';
import Footer from '/client/components/footer/footer.jsx';
// import Profile from '/client/components/profile/profile.jsx';
import Header from '/client/components/profile/header/header.jsx';
import ListTopics from '/client/components/profile/listTopics.jsx';
import ListSubTopics from '/client/components/profile/listSubTopics.jsx';
import ListPartner from '/client/components/profile/listPartner.jsx';

import ChatRoom from '/client/components/chatRoom/chatRoom.jsx';
/*global FlowRouter*/

  FlowRouter.route("/",{
      name: 'home',
      action(){
          mount(MainLayout,{
              navbar : <Navbar/>,
              content: <Content/>,
              footer: <Footer/>
          })
      }
  });

  FlowRouter.route("/interests",{
      name:'interests',
      action(){
          mount(ProfileLayout,{
              navbar : <Header/>,
            content: <ListTopics/>,
              footer: <Footer/>
          })
      }
  });
  FlowRouter.route("/subtopics",{
      name:'subtopics',
      action(){
          mount(ProfileLayout,{
              navbar : <Header/>,
            content: <ListSubTopics/>,
              footer: <Footer/>
          })
      }
  });
  FlowRouter.route("/partners",{
      name:'partners',
      action(){
          mount(ProfileLayout,{
              navbar : <Header/>,
            content: <ListPartner/>,
              footer: <Footer/>
          })
      }
  });
  FlowRouter.route("/chatroom/:_id",{
      name:'chatroom',
      action:function(params){
          console.log("chatroom: ",params);
          let otherUserId = params._id
          let filter = {
           $or: [{
               user1Id: Meteor.userId(),
               user2Id: otherUserId
           }, {
               user2Id: Meteor.userId(),
               user1Id: otherUserId
           }]
         };
         Meteor.call('addChat', filter, otherUserId, function(error, result) {
           console.log("llamando a addchat")
           if (!error) {
             console.log("se llamo bien llamando a addchat")
               if (result) {
                 Session.set("chatId", result);
                 
                 mount(ProfileLayout,{
                     navbar : <Header/>,
                     content: <ChatRoom/>,
                     footer: <Footer/>
                 });
               }
           }
         });


      }
  });
