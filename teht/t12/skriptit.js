function tarkistaLomake() {
    let x = document.forms["lomake"]["etunimi2"].value;
    if (x == "") {
      alert("Etunimi pitää antaa");
      return false;
    }
  }