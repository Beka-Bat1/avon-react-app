$(document).ready(function(){
	$('#submitForm').click(function(){
		if($('#firstname').val().length >= 2) {
			if($('#lastname').val().length >= 2) {
				if($('#phone').val().indexOf('_') < 0 && $('#phone').val().length > 0) {
					if($('#email').val().includes('@')){
						if($('#region').val().length >= 2){
							var firstName = $('#firstname').val();
							var lastName = $('#lastname').val();
							var phone = $('#phone').val();
							var email = $('#email').val();
							var region = $('#region').val();
							$.post("validation.php", {first_name:firstName,last_name:lastName,phone:phone,email:email,region:region});
							alert('დიდი მადლობა! დაგიკავშირდებით უახლოეს მომავალში.');
						} else {
							alert('შეიყვანეთ თქვენი რეგიონი');
						}
					} else {
						alert('შეიყვანეთ სწორი ელ. ფოსტა');
					}
				} else {
					alert('შეიყვანეთ სწორი ტელეფონის ნომერი');
				}
			} else {
				alert('თქვენი გვარი');
			}
		} else {
			alert('თქვენი სახელი');
		}
	});
});

