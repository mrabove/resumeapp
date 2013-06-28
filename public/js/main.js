$(document).ready(function(){

	// education_block_add
	$('.education_block_add').click(function() {
		var new_education_block = $('.education_block').first().clone();
		new_education_block.find('input').val('');
		new_education_block.css('display', 'none');
		$(this).before(new_education_block);
		new_education_block.slideDown(400);
		return false;

	});

	// experiences-add
	$('.experience_block_add').click(function() {
		var new_experience_block = $('.experience_block').first().clone();
		new_experience_block.find('input').val('');
		new_experience_block.css('display', 'none');
		$(this).before(new_experience_block);
		new_experience_block.slideDown(400);
		return false;
	});

	// skill-add
	$('.skill_block_add').click(function() {
		var new_skill_block = $('.skill_block').first().clone();
		new_skill_block.find('input').val('');
		new_skill_block.css('display', 'none');
		$(this).after(new_skill_block);
		new_skill_block.slideDown(400);
		return false;
	});

	// accomplishment-add
	$('.accomplishment_block_add').click(function() {
		var new_accomplishment_block = $('.accomplishment_block').first().clone();
		new_accomplishment_block.find('input').val('');
		new_accomplishment_block.css('display', 'none');
		$(this).after(new_accomplishment_block);
		new_accomplishment_block.slideDown(400);
		return false;
	});


	function formatDate(inputdate) {
	var year = inputdate.slice(2, 4);
	var month = inputdate.slice(5, 7);
	return month + year;
	}
		

	// use .each on .school_groups
	$('#userDataForm').submit(function() {
		var userData = {};

		userData.firstname			= $('#firstname').val();
		userData.lastname			= $('#lastname').val();
		userData.facebook			= $('#facebook').val();
		userData.linkedin			= $('#linkedininput').val();
		userData.websiteurl			= $('#websiteurl').val();
		userData.photo				= $('#photo').val();

		userData.address 			= $('#addressinput').val();
		userData.street				= $('#street').val();
		userData.city				= $('#city').val();
		userData.state				= $('#state').val();
		userData.zipcode			= $('#zipcode').val();
		userData.phonenumber		= $('#phonenumber').val();
		userData.email				= $('#emailinput').val();
		userData.skype				= $('#skype').val();
		userData.startdate          = $('#stardate').val();
		
		var education_block = $('.education_block');
		userData.education_block = [];
		education_block.each(function(index, item) {
			console.log(education_block);
			userData.education_block.push({
				schoolname 		: $(item).find('.schoolname').val(),
				degree 			: $(item).find('.degree').val(),
				gpa				: $(item).find('.gpa').val(),
				major			: $(item).find('.major').val(),
				minor			: $(item).find('.minor').val(),
				graduated       : formatDate($(item).find('.graduated').val()),
			});

			var experience_block = $('.experience_block');
			userData.experience_block = [];
			experience_block.each(function(index, item) {
				userData.experience_block.push({
					company 	    : $(item).find('.company').val(),
					position 		: $(item).find('.position').val(),
					startdate		: $(item).find('.startdate').val(),
					startdate       : formatDate($(item).find('.startdate').val()),
					enddate         : formatDate($(item).find('.enddate').val()),
				});

				var skill_block = $('.skill_block');
				userData.skill_block = [];
				skill_block.each(function(index, item) {
					userData.skill_block.push({
						skill 	        : $(item).find('.skill').val()
					});
				});
				var accomplishment_block = $('.accomplishment_block');
				userData.accomplishment_block = [];
				accomplishment_block.each(function(index, item) {
					console.log(1);
					userData.accomplishment_block.push({
						accomplishment 	: $(item).find('.accomplishment').val()
					});
				});

			});

			console.log(userData);
			$.ajax({
				url:'/api/resumes',
				type:'POST',
				data: JSON.stringify({
					resume:userData

				}),
				complete: function(response){
					console.log(response);
				}
			});
			return false;

		});
	});

			$.getJSON('signup.html', function(data) {
	  var items = [];
	 
	  $.each(data, function(key, val) {
	    items.push('<li id="' + key + '">' + val + '</li>');
	  });
	 
	  $('<ul/>', {
	    'class': 'my-new-list',
	    html: items.join('')
	  }).appendTo('body');
	});
	});


