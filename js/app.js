contactManagement = angular.module('contactManagement', []);
	
contactManagement.controller('ListContactCtrl', function ($scope){
	$scope.contacts = [
		{
			id:1,
			email:'maurisfermentum@gmail.com',
			firstname: 'Mauris',
			lastname: 'Fermentum',
			gender: 'Male',
			phone: '01225550246',
			address: 'Purus an ligula bibendum dan venenatis nib pellentesque'
		},
		{
			id:2,
			email:'nuncsitamet@gmail.com',
			firstname: 'Nunc',
			lastname: 'Sit amet',
			gender: 'Female',
			phone: '01235550246',
			address: 'cosmopolis ligula nulla tincidunt venenatis.'
		},
		{
			id:3,
			email:'montemous@gmail.com',
			firstname: 'Montemous',
			lastname: 'Quis',
			gender: 'Male',
			phone: '01255550246',
			address: 'Dincidunteros Consequuntur magni dolores'
		},
		{
			id:4,
			email:'quis@gmail.com',
			firstname: 'Quis',
			lastname: 'Montemous',
			gender: 'Male',
			phone: '01255550246',
			address: 'Consequuntur Dincidunteros magni dolores'
		},
		{
			id:5,
			email:'consequuntur@gmail.com',
			firstname: 'Consequuntur',
			lastname: 'Dincidunteros',
			gender: 'Female',
			phone: '01255550246',
			address: 'Consequuntur Dincidunteros magni dolores'
		}
	];

	$scope.delete = function (email) {
		angular.forEach($scope.contacts, function (contact) {
			if (contact.email == email) {
				$scope.contacts.splice($scope.contacts.indexOf(contact), 1);
			}
		});
	};

	$scope.updateEmail 		= function(contact, data){ contact.email = data; };
	$scope.updateFirstname 	= function(contact, data){ contact.firstname = data; };
	$scope.updateLastname 	= function(contact, data){ contact.lastname = data; };
	$scope.updateGender 	= function(contact, data){ contact.gender = data; };
	$scope.updatePhone 		= function(contact, data){ contact.phone = data; };
	$scope.updateAddress 	= function(contact, data){ contact.address = data; };

	$scope.predicate = 'email';
	$scope.reverse = true;
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

});

contactManagement.controller('AddContactCtrl', function ($scope) {
	$scope.create = function (contact) {
		$scope.contacts.push({
			email		: contact.email,
			firstname	: contact.firstname,
			lastname	: contact.lastname,
			gender		: contact.gender,
			phone		: contact.phone,
			address		: contact.address
		});
		$('#addNewModal').modal('hide');
	};
});
