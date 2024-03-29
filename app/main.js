var app = angular.module("AddressBook",[]);

app.service("contactService",function($http){
	this.contacts = [];
	var contactService = this;
	console.log("contacts init.");
	$http.get("http://localhost:9001/contacts")
	.then(function(res){
		console.log(res);
		while (res.data[0]){
			contactService.contacts.push(res.data.pop());
		}
	});
    
    this.addContact =function(contact){
        contactService.contacts.push(contact);
    }
});

app.controller("ContactController",function(contactService,$scope){
	$scope.contacts = contactService.contacts;
});

app.filter("proper",function(){
	return function(name){
		var type = typeof name;
		if (type !== 'number' && type !== 'string') throw new Error();
		return name.toString().split(" ").map(function(word)
		{
			return word[0].toUpperCase().concat(word.slice(1));
			
		}).join(" ");
	}
});

app.directive("avatar",function(){
	return {
		restrict:"AE",
		scope:{
			name:"=",
		},
		template:"<span class='avatar'>{{name[0] | proper}}</span>"
	}
});

app.controller('AddContact',function($scope,contactService){
    $scope.addContact = function(){
        contactService.addContact($scope.contact);
    };
});