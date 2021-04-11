$(function () {


	//Khi bam hide btn thi goi ham slideUp()
	$(".hide-btn1").click(function() {
		$(".table-container1").slideUp()
	})
  $(".hide-btn2").click(function() {
		$(".table-container2").slideUp()
	})
  $(".hide-btn3").click(function() {
		$(".table-container3").slideUp()
	})
  $(".hide-btn4").click(function() {
		$(".table-container4").slideUp()
	})
  $(".hide-btn5").click(function() {
		$(".table-container5").slideUp()
	})
  $(".hide-btn6").click(function() {
		$(".table-container6").slideUp()
	})
  $(".hide-btn7").click(function() {
		$(".table-container7").slideUp()
	})


	//Khi bam show btn thi goi ham slideDown()
	$(".show-btn1").click(function() {
		$(".table-container1").slideDown()
	})
  $(".show-btn2").click(function() {
		$(".table-container2").slideDown()
	})
  $(".show-btn3").click(function() {
		$(".table-container3").slideDown()
	})
  $(".show-btn4").click(function() {
		$(".table-container4").slideDown()
	})
  $(".show-btn5").click(function() {
		$(".table-container5").slideDown()
	})
  $(".show-btn6").click(function() {
		$(".table-container6").slideDown()
	})
  $(".show-btn7").click(function() {
		$(".table-container7").slideDown()
	})



  //Load data buttons
  $(".update1").one("click", function() {
		getData1();
    var x = document.getElementById("table-list1");
    x.style.display = "block";
	})
  $(".update2").one("click", function() {
		getData2();
    var x = document.getElementById("table-list2");
    x.style.display = "block";
	})
  $(".update3").one("click", function() {
		getData3();
    var x = document.getElementById("table-list3");
    x.style.display = "block";
	})
  $(".update4").one("click", function() {
		getData4();
    var x = document.getElementById("table-list4");
    x.style.display = "block";
	})
  $(".update5").one("click", function() {
		getData5();
    var x = document.getElementById("table-list5");
    x.style.display = "block";
	})
  $(".update6").one("click", function() {
		getData6();
    var x = document.getElementById("table-list6");
    x.style.display = "block";
	})
  $(".update7").one("click", function() {
		getData7();
    var x = document.getElementById("table-list7");
    x.style.display = "block";
	})


  //Create (New) buttons
  $(".create1").click(function() {
    createAYear();
	})
  $(".create2").click(function() {
    createSemester();
	})
  $(".create3").click(function() {
		createFaculty();
	})
  $(".create4").click(function() {
    createProgram();
	})
  $(".create5").click(function() {
    createModule();
	})
  $(".create6").click(function() {
    createClass();
	})
  $(".create7").click(function() {
    createLecturer();
	})
})

//Delete buttons


//Ajax GET de keo data ve display khi bam nut
function getData1(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/academic_year',
  success: function(data) {
    dataRender1(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}
function getData2(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/semesters',
  success: function(data) {
    dataRender2(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}

function getData3(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/faculties',
  success: function(data) {
    dataRender3(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}
function getData4(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/programs',
  success: function(data) {
    dataRender4(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}
function getData5(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/module',
  success: function(data) {
    dataRender5(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}
function getData6(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/classes',
  success: function(data) {
    dataRender6(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}
function getData7(){
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/survey/api/lecturers',
  success: function(data) {
    dataRender7(data);
  },
  error:function () {
    alert("Error loading order");
    },
  })
}


//Ham DataRender de keo data ve display, nhet vao bang
function dataRender1(data) {
data.map(val=>{
  $(`<tr>
    <td>${val.code}</td>
    <td><button id=${val.code} type="button" onClick="deleteAcademicYear(this.id)">Delete</button></td>
      <tr>`).appendTo(".table-list1");
})
}
function dataRender2(data) {
  data.map(val=>{
    $(`<tr>
      <td>${val.code}</td>
      <td>${val.aycode}</td>
      <td><button id=${val.code} type="button" onClick="deleteSemester(this.id)">Delete</button></td>
      <tr>`)
        .appendTo(".table-list2");
})
 }
  function dataRender3(data) {
    data.map(val=>{
      $(`<tr>
        <td>${val.code}</td>
        <td>${val.name}</td>
        <td><button id=${val.code} type="button" onClick="deleteFaculty(this.id)">Delete</button></td>
          <tr>`).appendTo(".table-list3");
})
}
function dataRender4(data) {
  data.map(val=>{
    $(`<tr>
      <td>${val.code}</td>
      <td>${val.name}</td>
      <td><button id=${val.code} type="button" onClick="deleteProgram(this.id)">Delete</button></td>
        <tr>`).appendTo(".table-list4");
})
}
function dataRender5(data) {
  data.map(val=>{
    $(`<tr>
      <td>${val.code}</td>
      <td>${val.name}</td>
      <td><button id=${val.code} type="button" onClick="deleteModule(this.id)">Delete</button></td>
        <tr>`).appendTo(".table-list5");
})
}
function dataRender6(data) {
  data.map(val=>{
    $(`<tr>
      <td>${val.code}</td>
      <td>${val.size}</td>
      <td>${val.scode}</td>
      <td>${val.mcode}</td>
      <td><button id=${val.code} type="button" onClick="deleteClass(this.id)">Delete</button></td>
        <tr>`).appendTo(".table-list6");
})
}
function dataRender7(data) {
  data.map(val=>{
    $(`<tr>
      <td>${val.code}</td>
      <td>${val.name}</td>
      <td><button id=${val.code} type="button" onClick="deleteLecturer(this.id)">Delete</button></td>
        <tr>`).appendTo(".table-list7");
})
}


//POST request when pressing New buttons:
function createAYear(){
  const code = $('#create-AYCode').val();
  let PostJson = {
    "code" : code,
  }
  $.ajax({
    type: 'POST',
    contentType: "application/json",
    url: "http://localhost:8080/survey/api/academic_year",
    data: JSON.stringify(PostJson),
    dataType: "text",
    error: function(e) {
    alert("Something wrong");
        console.log(e);
      },
    success : function(data, textStatus, jqXHR){
      alert("Create new academic year successfully");
      }
  })
}

function createSemester(){
    const code = $('#create-semCode').val();
    const aycode = $('#create-semAyCode').val();
    let PostJson = {
      "code" : code,
      "aycode" : aycode,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/semesters",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new semester successfully");
        }
    })
  }


function createFaculty(){
    const fcode = $('#create-fcode').val();
    const fname = $('#create-faculty').val();
    let PostJson = {
      "code" : fcode,
      "name" : fname,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/faculties",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new faculty successfully");
        }
    })
  }


  function createProgram(){
    const programcode = $('#create-programCode').val();
    const programname = $('#create-programName').val();
    let PostJson = {
      "code" : programcode,
      "name" : programname,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/programs",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new program successfully");
        }
    })
  }


  function createModule(){
    const code = $('#create-moduleCode').val();
    const name = $('#create-moduleName').val();
    let PostJson = {
      "code" : code,
      "name" : name,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/module",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new module successfully");
        }
    })
  }


  function createClass(){
    const code = $('#create-classCode').val();
    const size = $('#create-size').val();
    const scode = $('#create-semesterCode').val();
    const mcode = $('#create-modCode').val();
    let PostJson = {
      "code" : code,
      "size" : size,
      "scode" : scode,
      "mcode" : mcode,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/classes",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new class successfully");
        }
    })
  }


  function createLecturer(){
    const code = $('#create-lecturerCode').val();
    const name = $('#create-lecturerName').val();
    let PostJson = {
      "code" : code,
      "name" : name,
    }
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: "http://localhost:8080/survey/api/lecturers",
      data: JSON.stringify(PostJson),
      dataType: "text",
      error: function(e) {
      alert("Something wrong");
          console.log(e);
        },
      success : function(data, textStatus, jqXHR){
        alert("Create new lecturer successfully");
        }
    })
  }


  //Delete functions
  function deleteAcademicYear(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/academic_year/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteSemester(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/semesters/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteFaculty(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/faculties/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteProgram(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/programs/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteModule(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/module/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteClass(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/classes/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }
  function deleteLecturer(clicked_id)
  {
    var ID=clicked_id;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:8080/survey/api/lecturers/'+`${ID}`,
      success: function() {
        alert("Delete successful");
      },
      error:function () {
        alert("Error");
        },
      })
  }