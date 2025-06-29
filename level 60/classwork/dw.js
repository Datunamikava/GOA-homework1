// 1. შექმენით academy ობიექტი
const academy = {
  name: "Future Academy",
  courses: ["JavaScript", "Python",],
  socialLink: "https://github.com/Datunamikava/GOA-homework",
  reviews: {


    user1: {
      name: "გიორგი",
      status: "parent",
      review: "ძალიან კმაყოფილი ვარ კურსით!"
    },
    user2: {
      name: "ნინო",
      status: "child",
      review: "სასწავლო პროცესი ძალიან  საინტერესოა",
    },
    user3: {
      name: "ლევანი",
      status: "parent",
      review: "ძალიან კარგი გარემოა",

    }
  }
};


console.log("თვება-მნიშვნელობები:");
console.log(Object.entries(academy));


console.log("თვისებები:");
console.log(Object.keys(academy));


console.log("მნიშვნელობები:");
console.log(Object.values(academy));


console.log("აქვს თუ არა 'courses' თვისება:", academy.hasOwnProperty("courses"));
console.log("აქვს თუ არა 'location თვისება:", academy.hasOwnProperty("location"));

const additionalInfo = {
  member: treu
};

const mergedAcademy = Object.assign({}, academy, additionalInfo);
console.log("გაერთიანებული ობიექტი:");
console.log(mergedAcademy);


Object.freeze(academy);


console.log("გაყინულია თუ არა academy ობიექტი:", Object.isFrozen(academy));
                                                                                                                                                                                                                                                                                                                                                                                                      


