(function () {

	//code
	var photo = document.getElementById("user-photo");

	//check if photo exist 
	 if (photo) {
    photo.className += ' circle';
    photo.addEventListener('click', morph);
    
  }

  function morph () {
    photo.classList.toggle('circle');
  }

})();