// Fetching data function

/*
const fetchData = async () => {
  try {
    const res = await fetch("./person.json");

    if (!res.ok) {
      throw new Error("HTTP fetch error!");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetching data error: ", error);
  }
};

const getPerson = async () => {
  const person = await fetchData();
  console.log("Person data: ", person);
};

getPerson();
*/

const fs = require("fs/promises");
const path = require("path");

const fetchData = async () => {
  try {
    const filePath = path.join(__dirname, "person.json");
    console.log("File path: ", filePath);

    const rawData = await fs.readFile(filePath, "utf-8");
    console.log("Raw data: ", rawData);

    const data = await JSON.parse(rawData);
    return data;
  } catch (error) {
    console.error("Fetching data error: ", error);
  }
};

const getPerson = async () => {
  const person = await fetchData();
  console.log("Person data: ", person);

  person.map((curElem) => {
    return (
      console.log("Name: ", curElem.name),
      console.log("Title: ", curElem.title)
    );
  });
};

getPerson();
