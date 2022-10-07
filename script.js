let formInput = document.querySelector("#formInput");
let tinggi, berat, keterangan, bmi;
function hitung() {
  tinggi = parseFloat(document.getElementById("tinggi").value);
  tinggi /= 100;
  berat = parseFloat(document.getElementById("berat").value); // jika bilangan didalamnya mengandung desimal maka akan ditampilkan semua nilainya.

  bmi = berat / (tinggi * tinggi);
  if (bmi < 18.5) {
    keterangan = "Kamu Kurus &#128518;";
  } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
    keterangan = "Berat Badanmu Normal kok &#128515";
  } else if (bmi >= 25 && bmi <= 29.9) {
    keterangan = "Kamu Gemuk &#128551";
  } else if (bmi > 30) {
    keterangan = "Kamu Obesitas &#128552";
  } // Else If untuk mencari kondisi yang diinginkan

  document.getElementById("bmi").innerHTML = "Hasil  : " + bmi.toFixed(2);
  document.getElementById("keterangan").innerHTML = "Status : " + keterangan; // Nampilin Hasil dari Else if

  formInput.reset();
}
