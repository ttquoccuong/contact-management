contactManager = angular.module('contactManage', []);
	
contactManager.controller('ListContactCtrl', function(){
	var listContact = this;
	listContact.contacts = [
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

	listContact.create = function () {
		var count = listContact.contacts.length;

		listContact.contacts.push({
			email:listContact.email,
			firstname: listContact.firstname,
			lastname: listContact.lastname,
			gender: listContact.gender,
			phone: listContact.phone,
			address: listContact.address
		});

		if(listContact.contacts.length - count == 1 ) {
			listContact.email = '';
			listContact.firstname = '';
			listContact.lastname = '';
			listContact.gender = '';
			listContact.phone = '';
			listContact.address = '';
			alert('Add new Contact is success!');
			$('#addNewModal').modal('hide');
		} else {
			alert('Add new Contact is error!');
		}
	};

	var getIndexByEmail = function (email) {
		angular.forEach(listContact.contacts, function (contact) {
			if (contact.email == email) {
				return listContact.contacts.indexOf(contact);
			}
		});
	}

	listContact.getUpdate = function (email) {
		angular.forEach(listContact.contacts, function (contact) {
			if(contact.email == email){
				$("#updateModal").modal('show');
				listContact.email = contact.email;
				listContact.firstname = contact.firstname;
				listContact.lastname = contact.lastname;
				listContact.gender = contact.gender;
				listContact.phone = contact.phone;
				listContact.address = contact.address;
			}
		});
	};

	listContact.update = function (email) {
		angular.forEach(listContact.contacts, function (contact) {
			if(contact.email == email){
				// if( listContact.email == contact.email ||
				// 	listContact.firstname == contact.firstname ||
				// 	listContact.lastname == contact.lastname ||
				// 	listContact.gender == contact.gender ||
				// 	listContact.phone == contact.phone ||
				// 	listContact.address == contact.address )
				// {
				// 	$("#updateModal .modal-footer").appent('<span>Not any field update!</span>');
				// };
			};
		});
	};

	listContact.delete = function (email) {
		angular.forEach(listContact.contacts, function (contact) {
			if (contact.email == email) {
				listContact.contacts.splice(listContact.contacts.indexOf(contact), 1);
			}
		});
	};
});