//db name = cars_dealership
//Insert One document in the cars collection
const insertOneDocument = db.cars.insertOne({
  "maker": "Suzuki",
  "model": "Desire",
  "fuel_type": "Diesel",
  "transmission": "Manual",
  "engine": {
    "type": "Naturally Aspirated",
    "cc": 1900,
    "torque": "250 Nm"
  },
  "features": [
    "Leather Seats",
    "Wireless Charging",
    "Ventilated Seats",
    "Bluetooth"
  ],
  "sunroof": false,
  "airbags": 2
})

//insert many documents in the cars collectios
const insertManyDocumentsInCollection = db.cars.insertMany([
  {
    "maker": "Hyundai",
    "model": "Creta",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1493,
      "torque": "250 Nm"
    },
    "features": [
      "Sunroof",
      "Leather Seats",
      "Wireless Charging",
      "Ventilated Seats",
      "Bluetooth"
    ],
    "sunroof": true,
    "airbags": 6
  },
  {
    "maker": "Maruti Suzuki",
    "model": "Baleno",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1197,
      "torque": "113 Nm"
    },
    "features": [
      "Projector Headlamps",
      "Apple CarPlay",
      "ABS"
    ],
    "sunroof": false,
    "airbags": 2
  },
  {
    "maker": "Mahindra",
    "model": "XUV500",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "engine": {
      "type": "Turbocharged",
      "cc": 2179,
      "torque": "360 Nm"
    },
    "features": [
      "All-Wheel Drive",
      "Navigation System",
      "Cruise Control"
    ],
    "sunroof": true,
    "airbags": 6
  },
  {
    "maker": "Honda",
    "model": "City",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1498,
      "torque": "145 Nm"
    },
    "features": [
      "Keyless Entry",
      "Auto AC",
      "Multi-angle Rearview Camera"
    ],
    "sunroof": false,
    "airbags": 4
  }
]);

//findOne() - without condition gives the first document found in the collection
const findOneWithoutCondition = db.cars.findOne()

//findOne({maker:"Hundai"}) - with condition gives the first document found in the collection as per the condition
const findOneWithCondition = db.cars.findOne({
  maker: "Hundai"
})

//find() - will return all the documents in the collections
const find = db.cars.find()

//find({maker:"Hundai"}) - return all the documents in the cars collection whose maker is Hundai
const findAllWithCondition = db.cars.find({
  maker: "Hundai"
});

//Selecting specific fields using projection in mongoDB - returned document will have only maker and fuel_type fields - 1 = true, 0 = false
//1st Way
const findByOnlySelectingSepecificFields = db.cars.find({},
  {
    maker: 1, fuel_type: 1
  });

//2nd Way
const findFuelTypeIsPetrol = db.cars.find({
  fuel_type: {
    $eq: "Petrol"
  }
},
  {
    _id: 0, 'maker': true, 'fuel_type': 1
  });

//if don't want to return the _id mongoDB objectId
const findDocumentWithout_id = db.cars.find({},
  {
    maker: 1, fuel_type: 1, _id: 0
  });

//Query using logical operators - $and, and selecting some specific fields like maker,model and engine
//supported logical operators are -> $and, $or, $not, $nor
db.cars.find({
  $and: [
    {
      fuel_type: "Petrol"
    },
    {
      sunroof: false
    },
    {
      "engine.type": "Naturally Aspirated"
    }
  ]
},
  {
    maker: 1, model: 1, engine: 1
  })


//************************************************** UPDATE QUERIES ******************************************************************
//update one document using condition - this will add color to the first matching document
const updateOneDocument = db.cars.updateOne({
  maker: "Mahindra"
},
  {
    $set: {
      color: "Red"
    }
  });

//Update many document without condition - this will add a new field year inside all the cars documents
const updateManyWithoutCondition = db.cars.updateMany({},
  {
    $set: {
      year: 2024
    }
  })

//Removing the field from document with condition from the document
const removeFieldFromDocumentUsingUpdate = db.cars.updateOne({
  "maker": "Honda"
},
  {
    $unset: {
      features: ""
    }
  })

//Set/Add a new  featurs array feild in the documens
const addNewFieldWithUpdate = db.cars.updateOne({
  maker: "Honda"
},
  {
    $set: {
      features: [
        "Dashboard cam",
        "Ash tray",
        "Air Bag",
        "Wind Shield"
      ]
    }
  })

// Add new multiple Items in the array using $push and $each
const addNewItemsInArray = db.cars.updateOne({
  maker: "Honda"
},
  {
    $push: {
      features: {
        $each: [
          "New Features",
          "Luxury Seats"
        ]
      }
    }
  })

//Add one new item in the existing array
const addOneItemInArray = db.cars.updateOne({
  maker: "Honda"
},
  {
    $push: {
      features: "Sound System"
    }
  })

//Remove one Item from the existing array
const removeItemFromArray = db.cars.updateOne({
  maker: "Honda"
},
  {
    $pull: {
      features: "Sound System"
    }
  })



//********************************************************* DELETE QUERIES ************************************************************
//Delete One - Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.
const deleteOne = db.cars.deleteOne({
  _id: ObjectId("563237a41a4d68582c2509da")
});

//Delete Many - Without any condition will delete all the documents from the collection
const deleteAllInCollection = db.cars.deleteMany();


//******************************************************** CURSOR METHODS *************************************************************
//Total no of documents in collection using count
const taltaDocuments = db.cars.find().count();
const pertrolCarsCount = db.cars.find({
  fuel_type: "Petrol"
}).count()

//sorting the documents based on parameter
const sortedDocuments = db.cars.find().sort({
  model: 1
}) // default sorting is asending order, -1 for decending order
const sortedCarsByMaker = db.cars.find({},
  {
    _id: 0, maker: 1, model: 1
  }).sort({
    maker: 1
  })

//limit and skip
const documentsWithLimit = db.cars.find().limit(2) //only fetch the 2 documents/records
const documentsWithSkip = db.cars.find().skip(2) //Skipt the first 2 documents/recores rest will be returned as result 


//*************************************************** AGGREGATE FRAMEWORK/PIPELINE ****************************************************
/* - Aggregation is powerful framwork for complex operations like filtering,grouping,sorting, reshaping and summerizing data into 
     flexible way by the help on pipeline.

   - In this framework the data will be processed in multiple stages to get the desire results.

   - Most commonly used stages in aggregate framework
        - $match
        - $group
        - $project
        - $sort
        - $limit
        - $unwind
        - $loopkup
        - addFields
        - $count
        - $skip
        - $sum
        - $avg
*/
//Data for aggregate pipeline/framework
db.cars.insertMany([
  {
    "maker": "Hyundai",
    "model": "Creta",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1493,
      "torque": "250 Nm"
    },
    "features": [
      "Sunroof",
      "Leather Seats",
      "Wireless Charging",
      "Ventilated Seats",
      "Bluetooth"
    ],
    "sunroof": true,
    "airbags": 6,
    "price": 1500000,
    "owners": [
      {
        "name": "Raju",
        "purchase_date": "2021-03-15",
        "location": "Mumbai"
      },
      {
        "name": "Shyam",
        "purchase_date": "2023-01-10",
        "location": "Delhi"
      }
    ],
    "service_history": [
      {
        "date": "2022-04-10",
        "service_type": "Oil Change",
        "cost": 5000
      },
      {
        "date": "2023-07-18",
        "service_type": "Brake Replacement",
        "cost": 12000
      }
    ]
  },
  {
    "maker": "Maruti Suzuki",
    "model": "Baleno",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1197,
      "torque": "113 Nm"
    },
    "features": [
      "Projector Headlamps",
      "Apple CarPlay",
      "ABS"
    ],
    "sunroof": false,
    "airbags": 2,
    "price": 800000,
    "owners": [
      {
        "name": "Baburao",
        "purchase_date": "2020-08-22",
        "location": "Pune"
      }
    ],
    "service_history": [
      {
        "date": "2021-05-12",
        "service_type": "Tire Rotation",
        "cost": 2000
      },
      {
        "date": "2022-11-05",
        "service_type": "Battery Replacement",
        "cost": 7000
      }
    ]
  },
  {
    "maker": "Mahindra",
    "model": "XUV500",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "engine": {
      "type": "Turbocharged",
      "cc": 2179,
      "torque": "360 Nm"
    },
    "features": [
      "All-Wheel Drive",
      "Navigation System",
      "Cruise Control"
    ],
    "sunroof": true,
    "airbags": 6,
    "price": 1800000,
    "owners": [
      {
        "name": "Raju",
        "purchase_date": "2019-11-30",
        "location": "Bangalore"
      },
      {
        "name": "Shyam",
        "purchase_date": "2022-02-15",
        "location": "Hyderabad"
      }
    ],
    "service_history": [
      {
        "date": "2021-02-25",
        "service_type": "Transmission Repair",
        "cost": 35000
      },
      {
        "date": "2023-03-10",
        "service_type": "Tire Replacement",
        "cost": 15000
      }
    ]
  },
  {
    "maker": "Honda",
    "model": "City",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1498,
      "torque": "145 Nm"
    },
    "features": [
      "Keyless Entry",
      "Auto AC",
      "Multi-angle Rearview Camera"
    ],
    "sunroof": false,
    "airbags": 4,
    "price": 1200000,
    "owners": [
      {
        "name": "Baburao",
        "purchase_date": "2020-05-20",
        "location": "Chennai"
      }
    ],
    "service_history": [
      {
        "date": "2021-08-10",
        "service_type": "Oil Change",
        "cost": 5000
      },
      {
        "date": "2022-10-25",
        "service_type": "Brake Replacement",
        "cost": 10000
      }
    ]
  },
  {
    "maker": "Tata",
    "model": "Nexon",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Turbocharged",
      "cc": 1199,
      "torque": "170 Nm"
    },
    "features": [
      "Touchscreen",
      "Reverse Camera",
      "Bluetooth Connectivity"
    ],
    "sunroof": false,
    "airbags": 2,
    "price": 1100000,
    "owners": [
      {
        "name": "Raju",
        "purchase_date": "2021-12-05",
        "location": "Kolkata"
      }
    ],
    "service_history": [
      {
        "date": "2022-12-01",
        "service_type": "Oil Change",
        "cost": 6000
      },
      {
        "date": "2023-06-15",
        "service_type": "Tire Rotation",
        "cost": 3000
      }
    ]
  },
  {
    "maker": "Hyundai",
    "model": "Venue",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
      "type": "Turbocharged",
      "cc": 998,
      "torque": "172 Nm"
    },
    "features": [
      "Sunroof",
      "Touchscreen Infotainment",
      "Keyless Entry",
      "Rear Camera",
      "Cruise Control"
    ],
    "sunroof": true,
    "airbags": 4,
    "price": 1200000,
    "owners": [
      {
        "name": "Amit",
        "purchase_date": "2020-05-20",
        "location": "Bangalore"
      },
      {
        "name": "Priya",
        "purchase_date": "2022-11-05",
        "location": "Chennai"
      }
    ],
    "service_history": [
      {
        "date": "2021-07-15",
        "service_type": "Oil Change",
        "cost": 4000
      },
      {
        "date": "2023-03-22",
        "service_type": "Tire Replacement",
        "cost": 8000
      }
    ]
  },
  {
    "maker": "Hyundai",
    "model": "i20",
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1197,
      "torque": "114 Nm"
    },
    "features": [
      "Apple CarPlay",
      "ABS",
      "Projector Headlamps",
      "Wireless Charging"
    ],
    "sunroof": false,
    "airbags": 2,
    "price": 900000,
    "owners": [
      {
        "name": "Rohit",
        "purchase_date": "2021-06-15",
        "location": "Delhi"
      }
    ],
    "service_history": [
      {
        "date": "2022-09-10",
        "service_type": "Battery Replacement",
        "cost": 7000
      },
      {
        "date": "2023-05-25",
        "service_type": "Tire Rotation",
        "cost": 2500
      }
    ]
  },
  {
    "maker": "Maruti Suzuki",
    "model": "Swift",
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1198,
      "torque": "113 Nm"
    },
    "features": [
      "Touchscreen Infotainment",
      "ABS",
      "Keyless Entry",
      "Rear Parking Sensors"
    ],
    "sunroof": false,
    "airbags": 2,
    "price": 750000,
    "owners": [
      {
        "name": "Vijay",
        "purchase_date": "2019-03-20",
        "location": "Hyderabad"
      }
    ],
    "service_history": [
      {
        "date": "2020-05-18",
        "service_type": "Oil Change",
        "cost": 3000
      },
      {
        "date": "2022-08-10",
        "service_type": "Brake Replacement",
        "cost": 5000
      }
    ]
  },
  {
    "maker": "Tata",
    "model": "Harrier",
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "engine": {
      "type": "Turbocharged",
      "cc": 1956,
      "torque": "350 Nm"
    },
    "features": [
      "Panoramic Sunroof",
      "Leather Upholstery",
      "Terrain Response System",
      "Auto-Dimming IRVM"
    ],
    "sunroof": true,
    "airbags": 6,
    "price": 2000000,
    "owners": [
      {
        "name": "Deepak",
        "purchase_date": "2022-01-10",
        "location": "Mumbai"
      }
    ],
    "service_history": [
      {
        "date": "2022-10-15",
        "service_type": "Transmission Repair",
        "cost": 45000
      },
      {
        "date": "2023-04-20",
        "service_type": "Brake Replacement",
        "cost": 15000
      }
    ]
  },
  {
    "maker": "Honda",
    "model": "Amaze",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1498,
      "torque": "200 Nm"
    },
    "features": [
      "Keyless Entry",
      "Auto AC",
      "Rear Parking Camera",
      "Cruise Control"
    ],
    "sunroof": false,
    "airbags": 4,
    "price": 1000000,
    "owners": [
      {
        "name": "Anil",
        "purchase_date": "2020-11-25",
        "location": "Kolkata"
      }
    ],
    "service_history": [
      {
        "date": "2021-12-10",
        "service_type": "Oil Change",
        "cost": 4500
      },
      {
        "date": "2022-08-15",
        "service_type": "Tire Rotation",
        "cost": 2500
      }
    ]
  },
  {
    "maker": "Tata",
    "model": "Nexon EV",
    "fuel_type": "Electric",
    "transmission": "Automatic",
    "engine": {
      "type": "Electric Motor",
      "battery_capacity": "30.2 kWh",
      "torque": "245 Nm"
    },
    "features": [
      "Touchscreen Infotainment",
      "Wireless Charging",
      "Connected Car Tech",
      "Sunroof"
    ],
    "sunroof": true,
    "airbags": 6,
    "price": 1400000,
    "owners": [
      {
        "name": "Vikas",
        "purchase_date": "2021-05-20",
        "location": "Bangalore"
      }
    ],
    "service_history": [
      {
        "date": "2022-06-10",
        "service_type": "Battery Check",
        "cost": 0
      },
      {
        "date": "2023-03-15",
        "service_type": "Tire Rotation",
        "cost": 3000
      }
    ]
  },
  {
    "maker": "Hyundai",
    "model": "Kona Electric",
    "fuel_type": "Electric",
    "transmission": "Automatic",
    "engine": {
      "type": "Electric Motor",
      "battery_capacity": "39.2 kWh",
      "torque": "395 Nm"
    },
    "features": [
      "Wireless Charging",
      "Ventilated Seats",
      "Sunroof",
      "Auto AC"
    ],
    "sunroof": true,
    "airbags": 6,
    "price": 2300000,
    "owners": [
      {
        "name": "Sneha",
        "purchase_date": "2022-01-15",
        "location": "Mumbai"
      }
    ],
    "service_history": [
      {
        "date": "2022-09-10",
        "service_type": "Battery Check",
        "cost": 0
      },
      {
        "date": "2023-06-05",
        "service_type": "Brake Replacement",
        "cost": 8000
      }
    ]
  },
  {
    "maker": "Maruti Suzuki",
    "model": "WagonR",
    "fuel_type": "CNG",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 998,
      "torque": "90 Nm"
    },
    "features": [
      "Manual AC",
      "ABS",
      "Power Windows"
    ],
    "sunroof": false,
    "airbags": 2,
    "price": 600000,
    "owners": [
      {
        "name": "Rahul",
        "purchase_date": "2019-07-22",
        "location": "Delhi"
      }
    ],
    "service_history": [
      {
        "date": "2020-11-10",
        "service_type": "CNG Kit Checkup",
        "cost": 2000
      },
      {
        "date": "2021-08-15",
        "service_type": "Tire Rotation",
        "cost": 1500
      }
    ]
  },
  {
    "maker": "Honda",
    "model": "Amaze",
    "fuel_type": "CNG",
    "transmission": "Manual",
    "engine": {
      "type": "Naturally Aspirated",
      "cc": 1199,
      "torque": "110 Nm"
    },
    "features": [
      "Keyless Entry",
      "Auto AC",
      "Rear Parking Camera",
      "Cruise Control"
    ],
    "sunroof": false,
    "airbags": 4,
    "price": 800000,
    "owners": [
      {
        "name": "Sanjay",
        "purchase_date": "2021-03-18",
        "location": "Pune"
      }
    ],
    "service_history": [
      {
        "date": "2021-09-10",
        "service_type": "CNG Kit Checkup",
        "cost": 2500
      },
      {
        "date": "2022-05-15",
        "service_type": "Oil Change",
        "cost": 3500
      }
    ]
  }
])

//styntex
// db.collection.aggregate([
//   //1st stage
//   {$group: {
//     _id: "$maker",
//     totalCars: {
//       $sum: 1
//       }
//     }
//   }
//   //2nd stage
//   {$sort: {maker: 1
//     }
//   }
//   //3rd stage
//   {$count: {}
//   }
// ])

//================================ Grouping - $group ====================================
//-------------------------------------------------------------------------------------
const groupByMaker = db.cars.aggregate([
  {
    $group: {
      _id: "$maker"
    }
  } //_id to uniquely identify the document this how it suppose to do. otherise it will not work.
])

const result = [
  { _id: 'Maruti Suzuki' },
  { _id: 'Honda' },
  { _id: 'Hyundai' },
  { _id: 'Tata' },
  { _id: 'Mahindra' }
]
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//Grouping by maker of car with total no of cars in each group -> $sum - counts the number of documents in each group
const groupByMakeWithTotalNo = db.cars.aggregate([
  { $group: { _id: "$maker", totalCars: { $sum: 1 } } },
]);

//Result
const result1 = [
  { _id: 'Maruti Suzuki', totalCars: 3 },
  { _id: 'Honda', totalCars: 3 },
  { _id: 'Hyundai', totalCars: 4 },
  { _id: 'Tata', totalCars: 3 },
  { _id: 'Mahindra', totalCars: 1 }
]
//--------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------
//Grouping by maker of cars with total of cars and avg price of each group
const groupByMakeWithTotalNoAndAvg = db.cars.aggregate([
  {
    $group: {
      _id: "$maker", // *** IMP CONCEPT --> $maker denotes the value of the maker key in each document
      avgPrice: { $avg: "$price" },
      totalPrice: { $sum: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" },
      totalCars: { $sum: 1 },
    }
  }
])

const result2 = [
  {
    _id: 'Honda',
    avgPrice: 1000000,
    totalPrice: 3000000,
    minPrice: 800000,
    maxPrice: 1200000,
    totalCars: 3
  },
  {
    _id: 'Tata',
    avgPrice: 1500000,
    totalPrice: 4500000,
    minPrice: 1100000,
    maxPrice: 2000000,
    totalCars: 3
  },
  {
    _id: 'Mahindra',
    avgPrice: 1800000,
    totalPrice: 1800000,
    minPrice: 1800000,
    maxPrice: 1800000,
    totalCars: 1
  },
  {
    _id: 'Hyundai',
    avgPrice: 1475000,
    totalPrice: 5900000,
    minPrice: 900000,
    maxPrice: 2300000,
    totalCars: 4
  },
  {
    _id: 'Maruti Suzuki',
    avgPrice: 716666.6666666666,
    totalPrice: 2150000,
    minPrice: 600000,
    maxPrice: 800000,
    totalCars: 3
  }
]

//---------------------------------------------------------------------------------------
//Grouping by fuel_type of cars with total of cars and avg price of each group
const _groupByMakeWithTotalNoAndAvg = db.cars.aggregate([
  {
    $group: {
      _id: "$fuel_type", // *** IMP CONCEPT --> $fuel_type denotes the value of the fuel_type key in each document
      totalCars: { $sum: 1 }
    }
  },
  { $sort: { maker: 1 } }
])

const result3 = [
  { _id: 'CNG', totalCars: 2 },
  { _id: 'Electric', totalCars: 2 },
  { _id: 'Petrol', totalCars: 6 },
  { _id: 'Diesel', totalCars: 4 }
]
//----------------------------------------------------------------------------------------


//=======================================$match==========================================
//--------------------------------------------------------------------------------------
//find all the cars whose maker is "Hundai" and print the count
const findCarsWithMakerAndCount = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $count: "Total_Cars" }
])

const result4 = [{ Total_Cars: 4 }]
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
//Count the total no of diesel and Petrol cars of Hyundai brand
const query = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $group: { _id: "$fuel_type", totalCars: { $sum: 1 } } }
])

const result5 = [
  { _id: 'Petrol', totalCars: 2 },
  { _id: 'Electric', totalCars: 1 },
  { _id: 'Diesel', totalCars: 1 }
]
//---------------------------------------------------------------------------------------



//======================================= $project ======================================
//---------------------------------------------------------------------------------------
//Find all the Hyundai cars and only show maker,model and fuel_type details
const query1 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } }
])

const result6 = [
  { maker: 'Hyundai', model: 'Creta', fuel_type: 'Diesel' },
  { maker: 'Hyundai', model: 'Venue', fuel_type: 'Petrol' },
  { maker: 'Hyundai', model: 'i20', fuel_type: 'Petrol' },
  { maker: 'Hyundai', model: 'Kona Electric', fuel_type: 'Electric' }
]
//---------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
//Find all the Hyundai cars and only show maker,model and fuel_type details and sort on 
//the basis of model
const query2 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
  { $sort: { model: 1 } }
])

const _result6 = [
  { maker: 'Hyundai', model: 'Creta', fuel_type: 'Diesel' },
  { maker: 'Hyundai', model: 'Kona Electric', fuel_type: 'Electric' },
  { maker: 'Hyundai', model: 'Venue', fuel_type: 'Petrol' },
  { maker: 'Hyundai', model: 'i20', fuel_type: 'Petrol' }
]
//---------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
//Find only 2 with the help of limit Hyundai cars and only show maker,model and fuel_type 
//details and sort on the basis of model
//similar to limit, we can also use skip
const query3 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
  { $sort: { model: 1 } },
  { $limit: 2 }
])

const result7 = [
  { maker: 'Hyundai', model: 'Creta', fuel_type: 'Diesel' },
  { maker: 'Hyundai', model: 'Kona Electric', fuel_type: 'Electric' }
]
//---------------------------------------------------------------------------------------


//========================================= $sortByCount =================================
//Group the cars by maker and then sort based on count(no of cars) using $sortByCount
// it is a special aggregate stage

const query4 = db.cars.aggregate([
  { $sortByCount: "$maker" }
])

const result8 = [
  { _id: 'Hyundai', count: 4 },
  { _id: 'Maruti Suzuki', count: 3 },
  { _id: 'Honda', count: 3 },
  { _id: 'Tata', count: 3 },
  { _id: 'Mahindra', count: 1 }
]

//=================================== $unwind ==============================================
//we do have multiple owners for each cars, ie array of owners, now if we want to work/fetch
//the document speraterly as per the owner records we wan use $unwind for that.

const query5 = db.cars.aggregate([
  { $unwind: "$owners" },
  { $project: { maker: 1, model: 1, owners: 1 } }
])

const result9 = [
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    maker: 'Hyundai',
    model: 'Creta',
    owners: { name: 'Raju', purchase_date: '2021-03-15', location: 'Mumbai' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    maker: 'Hyundai',
    model: 'Creta',
    owners: { name: 'Shyam', purchase_date: '2023-01-10', location: 'Delhi' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964034'),
    maker: 'Maruti Suzuki',
    model: 'Baleno',
    owners: { name: 'Baburao', purchase_date: '2020-08-22', location: 'Pune' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964035'),
    maker: 'Mahindra',
    model: 'XUV500',
    owners: {
      name: 'Raju',
      purchase_date: '2019-11-30',
      location: 'Bangalore'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964035'),
    maker: 'Mahindra',
    model: 'XUV500',
    owners: {
      name: 'Shyam',
      purchase_date: '2022-02-15',
      location: 'Hyderabad'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964036'),
    maker: 'Honda',
    model: 'City',
    owners: {
      name: 'Baburao',
      purchase_date: '2020-05-20',
      location: 'Chennai'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964037'),
    maker: 'Tata',
    model: 'Nexon',
    owners: { name: 'Raju', purchase_date: '2021-12-05', location: 'Kolkata' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964038'),
    maker: 'Hyundai',
    model: 'Venue',
    owners: {
      name: 'Amit',
      purchase_date: '2020-05-20',
      location: 'Bangalore'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964038'),
    maker: 'Hyundai',
    model: 'Venue',
    owners: { name: 'Priya', purchase_date: '2022-11-05', location: 'Chennai' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964039'),
    maker: 'Hyundai',
    model: 'i20',
    owners: { name: 'Rohit', purchase_date: '2021-06-15', location: 'Delhi' }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403a'),
    maker: 'Maruti Suzuki',
    model: 'Swift',
    owners: {
      name: 'Vijay',
      purchase_date: '2019-03-20',
      location: 'Hyderabad'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403b'),
    maker: 'Tata',
    model: 'Harrier',
    owners: { name: 'Deepak', purchase_date: '2022-01-10', location: 'Mumbai' }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403c'),
    maker: 'Honda',
    model: 'Amaze',
    owners: { name: 'Anil', purchase_date: '2020-11-25', location: 'Kolkata' }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403d'),
    maker: 'Tata',
    model: 'Nexon EV',
    owners: {
      name: 'Vikas',
      purchase_date: '2021-05-20',
      location: 'Bangalore'
    }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403e'),
    maker: 'Hyundai',
    model: 'Kona Electric',
    owners: { name: 'Sneha', purchase_date: '2022-01-15', location: 'Mumbai' }
  },
  {
    _id: ObjectId('66fce6b47124d643c296403f'),
    maker: 'Maruti Suzuki',
    model: 'WagonR',
    owners: { name: 'Rahul', purchase_date: '2019-07-22', location: 'Delhi' }
  },
  {
    _id: ObjectId('66fce6b47124d643c2964040'),
    maker: 'Honda',
    model: 'Amaze',
    owners: { name: 'Sanjay', purchase_date: '2021-03-18', location: 'Pune' }
  }
]


//********************************************* STRING OPERATOR WITH AGGREGATE FRAMEWORK ****************************************************
/* String operators
       - $concat
       - $toUpper
       - $toLower
       - $regexMatch
       - $ltrim
       - $rtrim
       - $split
*/
//-------------------------------------------------------------------------------------------------
//List down all the Hyundai cars and print the name as Maker + Model i.e car_name = "Hyundai Creta"
const _query6 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  {
    $project: {
      _id: 0,
      CarName: { $concat: ["$maker", " ", "$model"] }
    }
  }
])

const result10 = [
  { CarName: 'Hyundai Creta' },
  { CarName: 'Hyundai Venue' },
  { CarName: 'Hyundai i20' },
  { CarName: 'Hyundai Kona Electric' }
]
//------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------
//List down all the Hyundai cars and print the name as Maker + Model i.e car_name = "Hyundai Creta"
//and model should be in uppercase
const query6 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  {
    $project: {
      _id: 0,
      CarName: { $concat: ["$maker", " ", "$model"] },
      model: { $toUpper: "$model" } // *** IMP CONCEPT --> $model denotes the value of the model key in each document
    }
  }
])

const result11 = [
  { CarName: 'Hyundai Creta', model: 'CRETA' },
  { CarName: 'Hyundai Venue', model: 'VENUE' },
  { CarName: 'Hyundai i20', model: 'I20' },
  { CarName: 'Hyundai Kona Electric', model: 'KONA ELECTRIC' }
]
//------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
//Add a flag is_diesel = true/false for each cars
const query7 = db.cars.aggregate([
  {
    $project: {
      model: 1,
      maker: 1,
      is_diesel: {
        $regexMatch: {
          input: "$fuel_type",
          regex: 'Die'
        }
      }
    }
  },
  { $limit: 2 }
])

const result12 = [
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    maker: 'Hyundai',
    model: 'Creta',
    is_diesel: true
  },
  {
    _id: ObjectId('66fce6b47124d643c2964034'),
    maker: 'Maruti Suzuki',
    model: 'Baleno',
    is_diesel: false
  }
]
//---------------------------------------------------------------------------------------

//===================================== *** IMPORTANT $out ============================================
//Find all Hyundai cars and only show maker,model and fuel_type 
//details and store them into a new collection
const query8 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
  { $sort: { model: 1 } },
  { $out: "Hyundai_cars" }
])
//---------------------------------------------------------------------------------------

//====================================================== AIRTHMETIC OPERATORS =================================================================
/* Some of the airthmetic operators are 
    - $add
    - $subtract
    - $divide
    - $multiply
    - $round
    - $abs
    - $ceil
*/

//-------------------------------------------------------------------------------------------
// $add --> Prints all the cars model and price with hike of 55000, similarly we can also use subtract
const query9 = db.cars.aggregate([
  { $project: { model: 1, price: "$price", newPrice: { $add: ["$price", 55000] } } }, //price:"$price" can also be written like price:1
  { $limit: 3 }
])

const result13 = [
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    model: 'Creta',
    price: 1500000,
    newPrice: 1555000
  },
  {
    _id: ObjectId('66fce6b47124d643c2964034'),
    model: 'Baleno',
    price: 800000,
    newPrice: 855000
  },
  {
    _id: ObjectId('66fce6b47124d643c2964035'),
    model: 'XUV500',
    price: 1800000,
    newPrice: 1855000
  }
]
//--------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
// $addFields --> Adds a new/custom field in the query results, this newly added fields does not
// exists in the document actually
// Usecase - Print details of cars with price in lakhs (15 Lakhs)
const query10 = db.cars.aggregate([
  { $project: { model: 1, price: 1 } },
  { $addFields: { price_in_lakhs: { $concat: [{ $toString: { $round: { $divide: ["$price", 100000] } } }, " ", "Lakhs"] } } },
  { $limit: 3 }
])

const result14 = [
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    model: 'Creta',
    price: 1500000,
    price_in_lakhs: '15 Lakhs'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964034'),
    model: 'Baleno',
    price: 800000,
    price_in_lakhs: '8 Lakhs'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964035'),
    model: 'XUV500',
    price: 1800000,
    price_in_lakhs: '18 Lakhs'
  }
]
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//Calculate the total service cost of each hyundai cars and sort the result on the basis of total service cost
//$set or $addFields anyone can be used to add a custom field in the results
const query11 = db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $set: { total_service_cost: { $sum: "$service_history.cost" } } },
  { $project: { model: 1, maker: 1, total_service_cost: 1 } },
  { $sort: { total_service_cost: 1 } }
])

const result15 = [
  {
    _id: ObjectId('66fce6b47124d643c296403e'),
    maker: 'Hyundai',
    model: 'Kona Electric',
    total_service_cost: 8000
  },
  {
    _id: ObjectId('66fce6b47124d643c2964039'),
    maker: 'Hyundai',
    model: 'i20',
    total_service_cost: 9500
  },
  {
    _id: ObjectId('66fce6b47124d643c2964038'),
    maker: 'Hyundai',
    model: 'Venue',
    total_service_cost: 12000
  },
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    maker: 'Hyundai',
    model: 'Creta',
    total_service_cost: 17000
  }
]


//====================================================== CONDITIONAL OPERATORS =================================================================
/* Some of conditional operators are 
    - $cond
    - $ifNull
    - $switch
*/

//--------------------------------------------------------------------------------------------------
// $cond - it is a mongoDB ternary conditional operator
// Usecase - Suppose we want to check if a car fuel_type is "Petrol" and categorized the cars into
// "Petrol Cars" and "Non Petrol Cars"
const query12 = db.cars.aggregate([
  {
    $project: {
      maker: 1,
      model: 1,
      fuelCategory: {
        $cond: {
          if: { $eq: ["$fuel_type", "Petrol"] },
          then: "Petrol Car",
          else: "Non Petrol Car"
        }
      }
    }
  },
])

const result16 = [
  {
    _id: ObjectId('66fce6b47124d643c2964033'),
    maker: 'Hyundai',
    model: 'Creta',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964034'),
    maker: 'Maruti Suzuki',
    model: 'Baleno',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964035'),
    maker: 'Mahindra',
    model: 'XUV500',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964036'),
    maker: 'Honda',
    model: 'City',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964037'),
    maker: 'Tata',
    model: 'Nexon',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964038'),
    maker: 'Hyundai',
    model: 'Venue',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964039'),
    maker: 'Hyundai',
    model: 'i20',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403a'),
    maker: 'Maruti Suzuki',
    model: 'Swift',
    fuelCategory: 'Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403b'),
    maker: 'Tata',
    model: 'Harrier',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403c'),
    maker: 'Honda',
    model: 'Amaze',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403d'),
    maker: 'Tata',
    model: 'Nexon EV',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403e'),
    maker: 'Hyundai',
    model: 'Kona Electric',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c296403f'),
    maker: 'Maruti Suzuki',
    model: 'WagonR',
    fuelCategory: 'Non Petrol Car'
  },
  {
    _id: ObjectId('66fce6b47124d643c2964040'),
    maker: 'Honda',
    model: 'Amaze',
    fuelCategory: 'Non Petrol Car'
  }
]
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// $switch - 
// Usecase - Suppose we want to categorize the price of the car into three categories "Budget","Midrange","Premium"
const query13 = db.cars.aggregate([
  {
    $project: {
      _id: 0,
      maker: 1,
      model: 1,
      priceCategory: {
        $switch: {
          branches: [
            { case: { $lt: ["$price", 500000] }, then: "Budget" },
            { case: { $and: [{ $gte: ["$price", 500000] }, { $lt: ["$price", 1000000] }] }, then: "Midrange" },
            { case: { $gte: ["$price", 1000000] }, then: "Premium" }
          ],
          default: "Unknown"
        }
      }
    }
  },
  { $sort: { maker: 1 } }
])

const result17 = [
  { maker: 'Honda', model: 'City', priceCategory: 'Premium' },
  { maker: 'Honda', model: 'Amaze', priceCategory: 'Premium' },
  { maker: 'Honda', model: 'Amaze', priceCategory: 'Midrange' },
  { maker: 'Hyundai', model: 'Creta', priceCategory: 'Premium' },
  { maker: 'Hyundai', model: 'Venue', priceCategory: 'Premium' },
  { maker: 'Hyundai', model: 'i20', priceCategory: 'Midrange' },
  {
    maker: 'Hyundai',
    model: 'Kona Electric',
    priceCategory: 'Premium'
  },
  { maker: 'Mahindra', model: 'XUV500', priceCategory: 'Premium' },
  {
    maker: 'Maruti Suzuki',
    model: 'Baleno',
    priceCategory: 'Midrange'
  },
  { maker: 'Maruti Suzuki', model: 'Swift', priceCategory: 'Midrange' },
  {
    maker: 'Maruti Suzuki',
    model: 'WagonR',
    priceCategory: 'Midrange'
  },
  { maker: 'Tata', model: 'Nexon', priceCategory: 'Premium' },
  { maker: 'Tata', model: 'Harrier', priceCategory: 'Premium' },
  { maker: 'Tata', model: 'Nexon EV', priceCategory: 'Premium' }
]

//====================================================== RELATIONSHIP IN MONGODB =================================================================
//$lookup to JOIN the collection with aggregation pipeline
//usecase - Suppose we have two collections users and orders. orders collection has a foreign key of users as user_id, Join users table with orders
/* --> Sample User document
   [
    {
        "_id": "user1",
        "name": "Amit Sharma",
        "email": "amit.sharma@example.com",
        "phone": "+91-987654210",
        "address": "MG Road, Mumbai, Maharashtra"
    },
    {
        "_id": "user2",
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "phone": "+91-987654211",
        "address": "Nehru Place, New Delhi, Delhi"
    },
    {
        "_id": "user3",
        "name": "Rahul Singh",
        "email": "rahul.singh@example.com",
        "phone": "+91-987654212",
        "address": "Sector 18, Noida, Uttar Pradesh"
    },
    {
        "_id": "user4",
        "name": "Anjali Nair",
        "email": "anjali.nair@example.com",
        "phone": "+91-987654213",
        "address": "Marine Drive, Kochi, Kerala"
    },
    {
        "_id": "user5",
        "name": "Vikram Desai",
        "email": "vikram.desai@example.com",
        "phone": "+91-987654214",
        "address": "Park Street, Kolkata, West Bengal"
    }
]

 --> Sample order document
 [
    {
        "_id": "order1",
        "user_id": "user1",
        "product": "Laptop",
        "amount": 50000,
        "order_date": "2024-08-01"
    },
    {
        "_id": "order2",
        "user_id": "user2",
        "product": "Mobile Phone",
        "amount": 15000,
        "order_date": "2024-08-05"
    },
    {
        "_id": "order3",
        "user_id": "user1",
        "product": "Headphones",
        "amount": 2000,
        "order_date": "2024-08-10"
    },
    {
        "_id": "order4",
        "user_id": "user3",
        "product": "Tablet",
        "amount": 25000,
        "order_date": "2024-08-12"
    },
    {
        "_id": "order5",
        "user_id": "user4",
        "product": "Smart Watch",
        "amount": 8000,
        "order_date": "2024-08-15"
    }
]
*/

const query14 = db.users.aggregate([
  {
    $lookup: {
      "from": "orders",
      "localField": "_id",
      "foreignField": "user_id",
      "as": "orders"
    }
  }
]);

const result18 = [
  {
    _id: 'user1',
    name: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    phone: '+91-987654210',
    address: 'MG Road, Mumbai, Maharashtra',
    orders: [
      {
        _id: 'order1',
        user_id: 'user1',
        product: 'Laptop',
        amount: 50000,
        order_date: '2024-08-01'
      },
      {
        _id: 'order3',
        user_id: 'user1',
        product: 'Headphones',
        amount: 2000,
        order_date: '2024-08-10'
      }
    ]
  },
  {
    _id: 'user2',
    name: 'Priya Verma',
    email: 'priya.verma@example.com',
    phone: '+91-987654211',
    address: 'Nehru Place, New Delhi, Delhi',
    orders: [
      {
        _id: 'order2',
        user_id: 'user2',
        product: 'Mobile Phone',
        amount: 15000,
        order_date: '2024-08-05'
      }
    ]
  },
  {
    _id: 'user3',
    name: 'Rahul Singh',
    email: 'rahul.singh@example.com',
    phone: '+91-987654212',
    address: 'Sector 18, Noida, Uttar Pradesh',
    orders: [
      {
        _id: 'order4',
        user_id: 'user3',
        product: 'Tablet',
        amount: 25000,
        order_date: '2024-08-12'
      }
    ]
  },
  {
    _id: 'user4',
    name: 'Anjali Nair',
    email: 'anjali.nair@example.com',
    phone: '+91-987654213',
    address: 'Marine Drive, Kochi, Kerala',
    orders: [
      {
        _id: 'order5',
        user_id: 'user4',
        product: 'Smart Watch',
        amount: 8000,
        order_date: '2024-08-15'
      }
    ]
  },
  {
    _id: 'user5',
    name: 'Vikram Desai',
    email: 'vikram.desai@example.com',
    phone: '+91-987654214',
    address: 'Park Street, Kolkata, West Bengal',
    orders: []
  }
]
//=============================================================================================================================================


//====================================================== INDEXING IN MONGODB =================================================================
/* -- An INDEX is a data structure the improves the speed of query operations by allowing the database to quickly locate and access the requied
      document/data without scanning the every single document in the collection.

  -- Types of INDICES in mongoDB
     - Single Field Index
     - Compound Index : Involve multiple fields
     - Unique Index : Index that ensure no two document have the same value for the indexed field
     - TTL Index : TTL(Time To Live) indexes that are used to automatically remove the document after a certain period of time.
*/

//====================================================== SHARDING IN MONGODB =================================================================
/* -- Sharding is a way of distributing data across multiple servers/machines(shards) to enable horizontal scalling. allowing the database to handle
      large dataset.

   -- All the database operation requests(Read/Write) which are comming from the different users, are redirected or routed by the MongoDB router
      called mongos
*/

//==================== 2nd Heighest salay in the table ===========================
/*SQL
 - Using subquery
 SELECT MAX(salary) FROM employee
 WHERE salary < (SELECT MAX(salary) FROM employee);

 - Using limit and offset
 SELECT name, salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 1;

 - nth highest salary
 SELECT name, salary FROM employee ORDER BY salary DESC LIMIT N-1,1;

*/

//NoSQL
/* This will fetch 2 record of highest salary
  db.employee.find({},{salary:1}).sort({salary:-1}).limit(2)
*/