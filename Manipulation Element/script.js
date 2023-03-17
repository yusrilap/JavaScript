//DOM Manipulation

//Buat Elemen Baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

//Simpan Tulisan Ke Dalam Paragraf
pBaru.appendChild(teksPBaru);

//Simpan pBaru Di Akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
//appendChild = Simpan ke akhir dari sebuah element parent

//-------------------------------------------------

//Membuat Element Baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

//Menyuruh JS Untuk menyisipkan Element Baru Ke Document html

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

//-------------------------------------------------
const section1 = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];
section1.removeChild(link);

//-------------------------------------------------
const section2 = document.getElementById('b');
const p4 = section2.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
section2.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
