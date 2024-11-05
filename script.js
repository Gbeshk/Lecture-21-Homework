for (let i = 1; i <= 15; i++) {
  if (i > 5) {
    console.log(`${i} მეტია 5_ზე`);
  } else {
    console.log(i);
  }
}

let masivi1 = [3, 6, 9, 12, 15];
for (let i = 0; i < masivi1.length; i++) {
  if (masivi1[i] % 2 == 0) {
    console.log(masivi1[i]);
  }
}

let x = "gamarjoba";
for (let i = 0; i < x.length; i++) {
  if (x[i] == "a") {
    console.log(`${x[i]} არის a`);
  } else {
    console.log(x[i]);
  }
}

let masivi2 = ["red", "green", "blue", "yellow"];
for (let i = 0; i < masivi2.length; i++) {
  if (masivi2[i].length > 5) {
    console.log(masivi2[i]);
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(`${i} იყოფა 7_ზე`);
  } else {
    console.log(i);
  }
}

let masivi3 = [4, 8, 12, 16, 20];
for (let i = 0; i < masivi3.length; i++) {
  console.log(masivi3[i] * 2);
}

let java = "javascript";
for (let i = 0; i < java.length; i++) {
  if (java[i] === "j") {
    break;
  }
  console.log(java[i]);
}

let masivi4 = [5, 10, 15, 20, 25];
for (let i = 0; i < masivi4.length; i++) {
  if (masivi4[i] % 5 === 0) {
    console.log(masivi4[i]);
  }
}

let word = "hello world";
for (let i = 0; i < word.length; i++) {
  if (word[i] != "o" && word[i] != " ") {
    console.log(word[i]);
  }
}

let y = 0;
let masivi5 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < masivi5.length; i++) {
  if (masivi5[i] % 2 === 0) {
    y = y + masivi5[i];
  }
}
console.log(y);

for (let i = 1; i <= 10; i++) {
  let n = i * 10;
  console.log(`10*${i}=${n}`);
}

let masivi6 = [2, 7, 4, 9, 5];
for (let i = 0; i < masivi6.length; i++) {
  if (masivi6[i] > 4) {
    console.log(masivi6[i] * 3);
  } else {
    console.log(masivi6[i]);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i > 10) {
    console.log(`${i} მეტია 10_ზე`);
  } else {
    console.log(i);
  }
}

let word1 = "frontend";
for (let i = 0; i < word1.length; i++) {
  if (word1[i] == "e") {
    console.log("ნაპოვნია 'e");
  }
}

let masivi7 = [100, 200, 300, 400, 500];
for (let i = 0; i < masivi7.length; i++) {
  if (masivi7[i] < 250) {
    console.log(masivi7[i]);
  }
}
