// console.log(localStorage);

localStorage.setItem("user-feedback" , "well , well, well...")


const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

const stringSettings = JSON.stringify(settings);

// console.log(stringSettings);

localStorage.setItem("settings" , stringSettings)

// console.log(localStorage.getItem("settings"))
// console.log(JSON.parse(localStorage.getItem("settings")))
// console.log(localStorage.getItem("user-feedback"))









// console.log(localStorage);


// Lesson 2

const form = document.querySelector(".js-feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
console.log(form);

const FORMDATA = "form-data";



const onSubmitForm = (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.elements);
  console.log(event.target.elements.name);
  console.log(event.target.elements.message);
  console.log(event.target.elements.message.value);
  const form = event.target;
  const input = event.target.elements.name;
  const message = event.target.elements.message;

const formData = {
  name: input.value,
  message: message.value,
}
form.reset();
  localStorage.removeItem(FORMDATA)
}

const oninputChange = (event) => {
console.log(event.target.value);
const formData = {
  name: input.value,
  message: textarea.value,
}
formData[event.target.name] = event.target.value;
console.log(formData);
 localStorage.setItem(FORMDATA , JSON.stringify(formData));
}

const populateData = (event) =>{
  const trueData = localStorage.getItem(FORMDATA);
  console.log(trueData);
  if(trueData){
    const parsedData = JSON.parse(trueData);
    console.log(parsedData);
    console.log(parsedData.name);
    input.value = parsedData.name;
    textarea.value = parsedData.message;
  }
}



form.addEventListener("submit" , onSubmitForm);
form.addEventListener("input" , oninputChange);
populateData();