document.getElementById("inputFile").onchange = function(e) {
    
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function(){
      let preview = document.getElementById('imagePreview'),
              image = document.createElement('img');
    image.style= 'width:250px';
             
      image.src = reader.result;
  
      preview.innerHTML = '';
      preview.append(image);
    };
  }
  