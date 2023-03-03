const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const kalkulasi = (operator, angka1, angka2) => {
    let hasil;
  
    switch (operator) {
    case '+':
     hasil = angka1 + angka2;
        break;
      case '-':
        hasil = angka1 - angka2;

    break;
    case '*':
    hasil = angka1 * angka2;
      break;
    case '/':
      hasil = angka1 / angka2;
        break;
      case '√':
      hasil = Math.sqrt(angka1);
        break;
     default:
     hasil = "Operator tidak valid";
    }
  
   return hasil;
  }

 const volKubus = (sisi) => {
    return sisi ** 3
  };

  const volTabung = (jari, tinggi) => {
    return 3.14 * jari**2 * tinggi
  };



  rl.question('Pilih operasi yang diinginkan: (1) Kalkulasi, (2) Volume Kubus, (3) Volume Tabung: ', (pilihan) => {
    if (pilihan === '1') {
      rl.question('Masukkan operator (+, -, *, /, √): ', (operator) => {
      if (operator === '√') {
        rl.question('Masukkan angka: ', (input1) => {
        const hasil = kalkulasi(operator, Number(input1));
          console.log(`Hasil kalkulasi: ${hasil}`);
          rl.close();
          });
        } else {
      rl.question('Masukkan angka pertama: ', (input1) => {
          rl.question('Masukkan angka kedua: ', (input2) => {
          const hasil = kalkulasi(operator, Number(input1), Number(input2));
            console.log(`Hasil kalkulasi: ${hasil}`);
            rl.close();
           });
        });
        }
      });
    } else if (pilihan == 2) {
    rl.question('Masukkan sisi kubus: ', (input) => {
      const hasil = volKubus(Number(input));
       console.log(`Volume kubus: ${hasil}`);
        rl.close();
      });
    } else if (pilihan == 3) {
    rl.question('Masukkan jari-jari tabung: ', (input1) => {
    rl.question('Masukkan tinggi tabung: ', (input2) => {
        const hasil = volTabung(Number(input1), Number(input2));
        console.log(`Volume tabung: ${hasil}`);
        rl.close();
    });
      });
    } else {
      console.log('Pilihan tidak benar');
      rl.close();
    }
  });
  
  
  
