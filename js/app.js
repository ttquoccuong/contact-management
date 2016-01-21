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

	$scope.genders = ['Male','Female','Others'];

	$scope.delete = function (email) {
		angular.forEach($scope.contacts, function (contact) {
			if (contact.email == email) {
				$scope.contacts.splice($scope.contacts.indexOf(contact), 1);
			}
		});
	};

	$scope.update = function (contact, data) {
		contact.email		= data.email;
		contact.firstname	= data.firstname;
		contact.lastname	= data.lastname;
		contact.gender		= data.gender;
		contact.phone		= data.phone;
		contact.address		= data.address;
	}

	$scope.predicate = '';
	$scope.reverse = false;
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

});

contactManagement.controller('AddContactCtrl', function ($scope) {
	$scope.create = function (contact) {
		if($scope.checkEmailExist($scope.contacts, contact.email)){
			alert('Email is exist!');
		} else {
			$scope.contacts.push({
				email		: contact.email,
				firstname	: contact.firstname,
				lastname	: contact.lastname,
				gender		: contact.gender,
				phone		: contact.phone,
				address		: contact.address
			});
			$('#addNewModal').modal('hide');
			// Reset Fields
			contact.email		= "";
			contact.firstname	= "";
			contact.lastname	= "";
			contact.gender		= "";
			contact.phone		= "";
			contact.address		= "";
		}
	};

	$scope.checkEmailExist = function (contacts, email) {
		isEmail = false;
		angular.forEach(contacts, function (contact) {
			if(contact.email === email){
				isEmail = true;
			}
		});
		return isEmail;
	}
});
