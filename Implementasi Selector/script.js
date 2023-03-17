//DOM Selection Method
//getElementById() = element
//getElementsByTagName() = HTMLCollection
//getElementsByClassName() = HTMLCollection
//querySelector() = element
//querySelectorAll() = nodeList
//Di javascript - dianggap operasi aritmatik bisa digantikan dengan CamelCase

//camelcase = huruf dari kata pertamanya huruf kecil dan huruf dari kata keduanya huruf besar

//getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'LABTIF UNSUR';

//getElementsByTagName()
const paragraf = document.getElementsByTagName('p');
//paragraf[1].style.backgroundColor = 'lightblue';

for (let  i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//getElementsByClassName(
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Dirubah Oleh javascript';
