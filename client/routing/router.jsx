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
