import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx'
import Content from '/client/components/content/content.jsx'
import Navbar from '/client/components/header/navbar.jsx'
import Footer from '/client/components/footer/footer.jsx'
/*global FlowRouter*/
FlowRouter.route("/",{
    action(){
        mount(MainLayout,{
            navbar : <Navbar/>,
            content: <Content/>,
            footer: <Footer/>
        })
    }
});