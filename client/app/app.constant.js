(function(angular, undefined) {
  angular.module("portfolioApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"popoverRetina": {
		"content": "Quality management is a discipline for ensuring that outputs, benefits, and the processes by which they are delivered meets stakeholder requirements and are fit for the purpose.",
		"title": "Quality"
	},
	"popoverSpeed": {
		"content": "Tired of waiting for your site to load? Not a problem, I will turn your product to a fast, responsive, and user-friendly project.",
		"title": "Make it Fast"
	},
	"popoverSupport": {
		"content": "The protection of your data and privacy is imperative to me when building your application. Making your information safe and protecting it while you sleep",
		"title": "Security"
	},
	"popoverShop": {
		"content": "Tired of paying too much? Tired of hiring 5 people to do what ONE can? You will be pleasantly surprised with my rate and speed.",
		"title": "Prices"
	},
	"popoverSocial": {
		"content": "Need assistance in logging in to your favorite social media account? Want to share news about your product or let everyone know about it? Leave it all to me",
		"title": "Make it Social"
	},
	"popoverCloud": {
		"content": "Whether it is a finished product or need for testing environment, I can give you ways of accessing the product on heroku or any other option",
		"title": "Deployment"
	},
	"feedback": [
		{
			"id": 1,
			"name": "Abigail Wilson",
			"image": "assets/images/team-member-1.jpg",
			"text": "Dear Arthur Thank you for your help with the  project. It has been great working with you on this occasion. I hope to have the opportunity of working with you again in the near future."
		},
		{
			"id": 2,
			"name": "Patrick Green",
			"image": "assets/images/team-member-2.jpg",
			"text": "Arthur Thank you for for helping us out. You are easy to work with, responsible and always thinking about the project. I hope we will have a chance to work together again. Thank you again!"
		},
		{
			"id": 3,
			"name": "Katrina Johansen",
			"image": "assets/images/team-member-3.jpg",
			"text": "I want to express my deep appreciation for the help and support you have offered me on my recent project. Without your help, I would have not been able to complete the project."
		}
	]
})

;
})(angular);