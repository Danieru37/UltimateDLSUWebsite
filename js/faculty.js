
  let tempArr = [];
  let facultyArr = [
    {
      id:1,
      name: "Abad, Alexander C.",
      title: "Assistant Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-1.jpg"
    },
    {
      id:2,
      name: "Abuan, Donabel D.",
      title: "Assistant Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-2.jpg"
    },
    {
      id:3,
      name: "Africa, Aaron Don M.",
      title: "Full Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-3.jpg"
    },
    {
      id:4,
      name: "Alipio, Melchizedek I.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-4.jpg"
    },
    {
      id:5,
      name: "Ambata, Leonard U.",
      title: "Assistant Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-5.jpg"
    },
    {
      id:6,
      name: "Arada, Gerald P.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-6.jpg"
    },
    {
      id:7,
      name: "Bandala, Argel A.",
      title: "Full Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-7.jpg"
    },
    {
      id:8,
      name: "Bucao, Bianca I.",
      title: "Assistant Prof. Lecturer",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-8.jpg"
    },
    {
      id:9,
      name: "Cabatuan, Melvin K.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-9.jpg"
    },
    {
      id:10,
      name: "Catalan, Jose Antonio M.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-10.jpg"
    },
    {
      id:11,
      name: "De Luna, Robert G.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-11.jpg"
    },
    {
      id:12,
      name: "Del Rosario, Jay Robert.",
      title: "Associate Professor",
      text: "Electronics And Communications Engineering",
      img: "src/faculty/faculty-12.jpg"
    }
  ];

  show(facultyArr);

  function show(arr) {
    document.getElementById("myCard").innerText = "";

    for(var i=0;i<arr.length;i++){
      document.getElementById("myCard").innerHTML += `
        <div class="card">
          <img  src="${arr[i].img}" class = "img-front">
          <div class="card-body">
            <h5 class="card-title">${arr[i].name}</h5>   
            <p class="card-text">${arr[i].title}<br>
              ${arr[i].text}</p>
          </div>
        </div>
      `
    }

    document.getElementById("inputFaculty").addEventListener("keyup",function(){
      let searchInput = document.getElementById("inputFaculty").value.toLowerCase();
      tempArr = facultyArr.filter(function(a){
        if(a.name.includes(searchInput)){
          return a.name;
        }
      });

      if(this.value == ""){
        show(facultyArr);
      } else {
        if(tempArr == ""){
          document.getElementById("myCard").innerHTML = "";
        } else {
          show(tempArr);
        }
      }
    });

  }
