import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

// const settings = Meteor.settings.google;
// console.log(settings)
// if(settings){
    ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId:"690649158620-kig7toe1pm7l9dmvr4nhfrhiqkcprv0a.apps.googleusercontent.com",
        secret: "yNdBv4AJf_NVk6uo2ST_Foyb",
        loginStyle: "popup"
      }
    });
// }
