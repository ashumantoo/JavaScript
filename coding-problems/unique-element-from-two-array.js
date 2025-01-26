const persons1 = [
  {
    id: "ABC_01_XYZ",
    name: "Ashutosh",
    address: {
      city: "Bangalore"
    }
  },
  {
    id: "ABC_02_XYZ",
    name: "Govind",
    address: {
      city: "Patna"
    }
  },
  {
    id: "ABC_03_XYZ",
    name: "Manoj",
    address: {
      city: "New Delhi"
    }
  }
]

const persons2 = [
  {
    id: "ABC_04_XYZ",
    name: "Prem",
    address: {
      city: "Siwan"
    }
  },
  {
    id: "ABC_02_XYZ",
    name: "Govind",
    address: {
      city: "Patna"
    }
  },
  {
    id: "ABC_05_XYZ",
    name: "Shashi",
    address: {
      city: "Bangalore"
    }
  }
]

const mergedArray = [...persons1, ...persons2];

const uniquePersonByMap = new Map(mergedArray.map((item) => [item.id, item]));

//Convert map into an array
const uniquePersonArray = Array.from(uniquePersonByMap.values());
console.log("Array:-->", uniquePersonArray);

for (const [key, value] of uniquePersonByMap) {
  console.log("Key: ", key, " Name: ", value.name);
}


//Unique person element using filter and findIndex
const uniquPersonByFilter = persons1.filter((item, index, array) => {
  return index === array.findIndex((arr) => arr.id === item.id);
});
console.log("111111-------", uniquPersonByFilter);