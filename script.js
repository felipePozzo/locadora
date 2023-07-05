function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationNote = document.forms["register"]["note"].value;

  if (validationCod == "") {
    alert("O código deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O título deve ser preenchido");
    return false;
  }
  if (validationDirector == "") {
    alert("O nome do diretor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A data ser preenchida");
    return false;
  }
  if (validationActor == "") {
    alert("O Ator/Atriz deve ser preenchido");
    return false;
  }
  if (validationNote == "") {
    alert("A Nota deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("O Gênero deve ser preenchido");
    return false;
  }

  alert("a validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;
  let actor = document.forms["register"]["actor"].value;
  let note = document.forms["register"]["note"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${radio}</td>
  <td>${actor}</td>
  <td>${note}</td>
    `;
}
