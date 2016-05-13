import { ServiceConfiguration } from 'meteor/service-configuration';

const settings = Meteor.settings.google;
if(settings){
    ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: settings.clientId,
        secret: settings.secret,
        loginStyle: "popup"
      }
    },
    { upsert: true }
  );
}
