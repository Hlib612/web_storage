// console.log(localStorage);

localStorage.setItem("user-feedback" , "well , well, well...")


const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

const stringSettings = JSON.stringify(settings);

console.log(stringSettings);

localStorage.setItem("settings" , stringSettings)

console.log(localStorage.getItem("settings"))
console.log(JSON.parse(localStorage.getItem("settings")))
console.log(localStorage.getItem("user-feedback"))









console.log(localStorage);