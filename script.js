document.getElementById("proses").addEventListener("click", function () {
    var npm = document.getElementById("npm").value;
    var nama = document.getElementById("nama").value;
    var nilai = document.getElementById("nilai").value;
    var grade = "";
    var status = "";
  
    document.write("<h3>Npm " + npm + "</h3>");
    document.write("<h3>Nama " + nama + "</h3>");
    document.write("<h3>Nilai " + nilai + "</h3>");
  
    if (nilai >= 80) {
      status = "Lulus";
      grade = "A";
    } else if (nilai >= 70) {
      status = "Lulus";
      grade = "B";
    } else if (nilai >= 60) {
      status = "Lulus";
      grade = "C";
    } else if (nilai >= 50) {
      status = "Lulus";
      grade = "D";
    } else {
      status = "TIDAK LULUS";
      grade = "E";
    }
  
    document.write(`<h3>Grade Anda : ${grade}</h3>`);
    document.write(`<h3>Status : ${status}</h3>`);
  });