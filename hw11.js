// function createPerson(name, surname) {
//     return {
//       name,
//       surname,
//       getFullName() {
//         let fullName = this.name + " " + this.surname;
//         if (this.fatherName) {
//           fullName = this.name + " " + this.fatherName + " " + this.surname;
//         }
//         return fullName;
//       }
//     };
//   }




// const a = createPerson("Вася", "Пупкін");
// const b = createPerson("Ганна", "Іванова");
// const c = createPerson("Єлизавета", "Петрова");

// console.log(a.getFullName()); // Вася Пупкін
// a.fatherName = "Іванович";
// console.log(a.getFullName()); // Вася Іванович Пупкін

// console.log(b.getFullName()); // Ганна Іванова

// function createPersonClosure(name, surname) {
//     let age;
//     let fatherName;
  
//     function getName() {
//       return name;
//     }
  
//     function getSurname() {
//       return surname;
//     }
  
//     function getFatherName() {
//       return fatherName;
//     }
  
//     function getAge() {
//       return age;
//     }
  
//     function getFullName() {
//       return `${surname} ${name} ${fatherName}`;
//     }
  
//     function setName(newName) {
//       if (typeof newName === 'string' && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']*$/.test(newName)) {
//         name = newName;
//       }
//       return name;
//     }
  
//     function setSurname(newSurname) {
//       if (typeof newSurname === 'string' && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']*$/.test(newSurname)) {
//         surname = newSurname;
//       }
//       return surname;
//     }
  
//     function setFatherName(newFatherName) {
//       if (typeof newFatherName === 'string' && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']*$/.test(newFatherName)) {
//         fatherName = newFatherName;
//       }
//       return fatherName;
//     }
  
//     function setAge(newAge) {
//       if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
//         age = newAge;
//       }
//       return age;
//     }
  
//     function setFullName(newFullName) {
//       const parts = newFullName.split(' ');
//       if (parts.length === 3) {
//         const [newSurname, newName, newFatherName] = parts;
//         setSurname(newSurname);
//         setName(newName);
//         setFatherName(newFatherName);
//       }
//       return getFullName();
//     }
  
//     return {
//       getName,
//       getSurname,
//       getFatherName,
//       getAge,
//       getFullName,
//       setName,
//       setSurname,
//       setFatherName,
//       setAge,
//       setFullName
//     };
//   }
  


// function createPersonClosureDestruct({ name = '', surname = '', age = 0 } = {}) {
//     let fatherName = '';
    
//     function getName() {
//       return name;
//     }
    
//     function setName(newName) {
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newName)) {
//         name = newName;
//       }
//       return name;
//     }
    
//     function getSurname() {
//       return surname;
//     }
    
//     function setSurname(newSurname) {
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newSurname)) {
//         surname = newSurname;
//       }
//       return surname;
//     }
    
//     function getFatherName() {
//       return fatherName;
//     }
    
//     function setFatherName(newFatherName) {
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newFatherName)) {
//         fatherName = newFatherName;
//       }
//       return fatherName;
//     }
    
//     function getAge() {
//       return age;
//     }
    
//     function setAge(newAge) {
//       if (/^\d+$/.test(newAge) && newAge >= 0 && newAge <= 100) {
//         age = Number(newAge);
//       }
//       return age;
//     }
    
//     function getFullName() {
//       return `${surname} ${name} ${fatherName}`;
//     }
    
//     function setFullName(fullName) {
//       const [newSurname, newName, newFatherName] = fullName.split(' ');
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newSurname)) {
//         surname = newSurname;
//       }
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newName)) {
//         name = newName;
//       }
//       if (/^[A-ZА-Я][a-zа-я]*$/.test(newFatherName)) {
//         fatherName = newFatherName;
//       }
//       return `${surname} ${name} ${fatherName}`;
//     }
    
//     return { getName, setName, getSurname, setSurname, getFatherName, setFatherName, getAge, setAge, getFullName, setFullName };
//   }
  


// function isSorted(...params) {
//     for (let i = 1; i < params.length; i++) {
//       if (typeof params[i] !== 'number' || params[i] <= params[i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   }

// function isSorted(...args) {
//    for (let i = 1; i < args.length; i++) {
//       if (typeof args[i] !== "number" || args[i] <= args[i - 1]) {
//          return false;
//       }
//    }
//    return true;
// }
// console.log(isSorted(1, 2, 3, 4, 5)); // true
// console.log(isSorted(1, 2, 3, 5, 4)); // false
// console.log(isSorted(1, 2, "3", 4, 5)); // false
// console.log(isSorted()); // true


// const arr1 = new Array(5).fill().map((_, i) => i + 1)
// console.log(isSorted(...arr1)) // true
// const arr2 = new Array(5).fill().map((_, i) => 5 - i)
// console.log(isSorted(...arr2)) // false
// const arr3 = [1, 2, 3, '4', 5]
// console.log(isSorted(...arr3)) // false
// const arr4 = []
// console.log(isSorted(...arr4)) // true
// const arr5 = [1, 1, 2, 3, 5]
// console.log(isSorted(...arr5)) // true


function personForm(parent, person) {
    // Створюємо input елементи та додаємо їх у батьківський елемент
    const nameInput = document.createElement("input");
    nameInput.value = person.getName();
    parent.appendChild(nameInput);
    const surnameInput = document.createElement("input");
    surnameInput.value = person.getSurname();
    parent.appendChild(surnameInput);
    const patronymicInput = document.createElement("input");
    patronymicInput.value = person.getPatronymic();
    parent.appendChild(patronymicInput);
    const ageInput = document.createElement("input");
    ageInput.value = person.getAge();
    parent.appendChild(ageInput);
    const fullNameInput = document.createElement("input");
    fullNameInput.value = person.getFullName();
    parent.appendChild(fullNameInput);
    // Додаємо обробники подій oninput для кожного input елементу
    nameInput.oninput = () => {
       person.setName(nameInput.value);
       nameInput.value = person.getName();
       fullNameInput.value = person.getFullName();
    };
    surnameInput.oninput = () => {
       person.setSurname(surnameInput.value);
       surnameInput.value = person.getSurname();
       fullNameInput.value = person.getFullName();
    };
    patronymicInput.oninput = () => {
       person.setPatronymic(patronymicInput.value);
       patronymicInput.value = person.getPatronymic();
       fullNameInput.value = person.getFullName();
    };
    ageInput.oninput = () => {
       person.setAge(ageInput.value);
       ageInput.value = person.getAge();
    };
    fullNameInput.oninput = () => {
       const fullName = fullNameInput.value;
       const [surname, name, patronymic] = fullName.split(" ");
       person.setSurname(surname || "");
       person.setName(name || "");
       person.setPatronymic(patronymic || "");
       surnameInput.value = person.getSurname();
       nameInput.value = person.getName();
       patronymicInput.value = person.getPatronymic();
       fullNameInput.value = person.getFullName();
    };
 }
 
  