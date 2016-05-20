import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

// const settings = Meteor.settings.google;
// console.log(settings)
// if(settings){
    ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId:"xxx",
        secret: "xxx",
        loginStyle: "popup"
      }
    },{upsert:true});
// }
