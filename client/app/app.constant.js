(function(angular, undefined) {
  angular.module("portfolioApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"popoverRetina": {
		"content": "Quality management is a discipline for ensuring that outputs, benefits, and the processes by which they are delivered, meet stakeholder requirements and are fit for purpose.",
		"title": "Quality"
	},
	"popoverSpeed": {
		"content": "Tired of waiting till your site loads? I will make it your product fast and easy to understand",
		"title": "Make it Fast"
	},
	"popoverSupport": {
		"content": "The protection of people and data is increasingly is my  focus  when building your application.",
		"title": "Security"
	},
	"popoverShop": {
		"content": "Tired of paying to much? Tired of hiring 5 people to do what one can? You will be pleasantly surprised by my rate",
		"title": "Prices"
	},
	"popoverSocial": {
		"content": "Need ability to login via your favorite social account? Want to share news about your product or let everyone know about it? I can do that too",
		"title": "Make it Social"
	},
	"popoverCloud": {
		"content": "Wether it is finished product or need for testing environment, I will give you way of accessing the product on heroku or any other option",
		"title": "Deployment"
	},
	"feedback": [
		{
			"image": "image",
			"text": "Dear Arthur Thank you for your help with the  project. It has been great working with you on this occasion. I hope to have the opportunity of working with you again in the near future."
		},
		{
			"image": "image",
			"text": "test."
		}
	]
})

;
})(angular);