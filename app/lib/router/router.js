 /*global Router*/
 Router.configure({
     layoutTemplate: 'ApplicationLayout'
 });
 // specify the top level route, the page users see when they arrive at the site
 Router.route('/', function() {
     console.log("rendering root /");
     this.render("nav", {
         to: "header"
     });
     this.render("home_page", {
         to: "main"
     });
     this.render("footer", {
         to: "footer"
     });
 });