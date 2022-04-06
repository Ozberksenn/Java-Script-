window.onload = () => {


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

  // Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

  let PERSON = person.filter(i => i.age > 30)
  console.log("Yaşı 30 dan büyük olan :",PERSON)

  // Soru 2: Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

  let PERSON2=person.filter(index => index.languages.includes('JavaScript','CSS'))
  console.log("JavaScript bilen kişi :",PERSON2)

};