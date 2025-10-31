function buatFormAsn() {
  const matkul = document.getElementById("matkul").value.trim();
  const jumlah = parseInt(document.getElementById("jumlahAsn").value);
  
  if (matkul === "") {
    alert("Isi nama mata kuliahnya dulu bro");
    return;
  }
  
  if (isNaN(jumlah) || jumlah < 1) {
    alert("Mohon isi jumlah ASN terlebih dahulu.");
    return;
  }

  const formDiv = document.getElementById("formAsn");
  formDiv.innerHTML = "";

  for (let i = 1; i <= jumlah; i++) {
    const div = document.createElement("div");
    div.className = "asn-input";
    div.innerHTML = `
      <label>ASN ${i} - Nilai (0-100):</label>
      <input type="number" class="nilai" min="0" max="100" required>

      <label>ASN ${i} - Bobot (dalam %):</label>
      <input type="number" class="bobot" min="0" max="100" required>
    `;
    formDiv.appendChild(div);
  }

  // Tampilkan tombol Hitung
  document.getElementById("btnHitung").style.display = "block";
}

function hitungNilai() {
  const nilaiInputs = document.querySelectorAll(".nilai");
  const bobotInputs = document.querySelectorAll(".bobot");

  let totalBobot = 0;
  let totalNilai = 0;

  for (let i = 0; i < nilaiInputs.length; i++) {
    const nilai = parseFloat(nilaiInputs[i].value);
    const bobot = parseFloat(bobotInputs[i].value);

    if (isNaN(nilai) || isNaN(bobot)) {
      alert("Mohon isi semua nilai dan bobot.");
      return;
    }

    totalBobot += bobot;
    totalNilai += (nilai / 100) * bobot;
  }

  if (totalBobot !== 100) {
    alert("Total bobot harus 100% (sekarang: " + totalBobot + "%)");
    return;
  }

  const matkul = document.getElementById("matkul").value;
  document.getElementById("hasil").textContent =
    `Nilai akhir mata kuliah ${matkul}: ${totalNilai.toFixed(2)}`;
}
