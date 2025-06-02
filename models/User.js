export class User {
  constructor(
    fullName,
    password,
    phone = null,
    birthDate = null,
    document = null,
    workData = null
  ) {
    this.fullName = fullName;
    this.password = password;
    this.phone = phone;
    this.birthDate = birthDate;
    this.document = document;
    this.workData = workData;
  }
}

export class Document {
  constructor(series = null, number = null, issueDate = null) {
    this.series = series;
    this.number = number;
    this.issueDate = issueDate;
  }
}

export class WorkData {
  constructor(companyName = null, phone = null, address = null) {
    this.companyName = companyName;
    this.phone = phone;
    this.address = address;
  }
}

// Пример полного запроса json

//  {
//       "fullName": "Pavel",
//       "phone": "73282398742",
//       "birthDate":"12.04.1993",
//       "document": {
//         "number": "672842",
//         "series": "2384",
//         "issueDate": "24.04.2012"
//       },
//       "workData": {
//         "companyName": "DendiClubs",
//         "phone": "37-37-42",
//         "address": "Никитина 22"
//       }
//  }
