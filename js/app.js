contactManagement = angular.module('contactManagement', []);
	
contactManagement.controller('ListContactCtrl', function ($scope){
	$scope.contacts = [
		{
			id:1,
			email:'demo1@gmail.com',
			firstname: 'Ton',
			lastname: 'Cuong',
			gender: 'Male',
			phone: '01225550246',
			address: 'Tan Phu Dist, HCMC'
		},
		{
			id:2,
			email:'demo2@gmail.com',
			firstname: 'Ton',
			lastname: 'Cuong',
			gender: 'Male',
			phone: '01225550246',
			address: 'Tan Phu Dist, HCMC'
		},
		{
			id:3,
			email:'demo3@gmail.com',
			firstname: 'Ton',
			lastname: 'Cuong',
			gender: 'Male',
			phone: '01225550246',
			address: 'Tan Phu Dist, HCMC'
		}
	];

	$scope.delete = function (email) {
		angular.forEach($scope.contacts, function (contact) {
			if (contact.email == email) {
				$scope.contacts.splice($scope.contacts.indexOf(contact), 1);
			}
		});
	};

	$scope.updateName = function(contact, newEmail){
		contact.email = newEmail;
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

// contactManagement.controller('EditContactCtrl', function ($scope) {
// 	$scope.getContactByEmail = function (email) {
// 		angular.forEach($scope.contacts, function (contact) {
// 			if(contact.email == email){
// 				$("#updateModal").modal('show');
// 				email		= contact.email;
// 				firstname	= contact.firstname;
// 				lastname	= contact.lastname;
// 				gender		= contact.gender;
// 				phone		= contact.phone;
// 				address		= contact.address;
// 			}
// 		});
// 	};

// 	$scope.update = function (email, contact) {
// 		angular.forEach($scope.contacts, function (temp) {
// 			if(temp.email === email){
// 				$scope.contacts[].temp = contact;
// 			}
// 		});
// 	}
// });