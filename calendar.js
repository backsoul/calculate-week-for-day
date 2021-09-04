/* 
 - Calculate week for day -
 Created at: 2021-10-23
 By: Backsoul
*/

const moment = require("moment");
const week_names = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const contruct_week = (date) => {
  const day_in_week = Number(moment(date, "YYYY-MM-DD").weekday());
  const week = [];
  for (let index = 1; index <= 7; index++) {
    let subtract_day = moment(date, "YYYY-MM-DD").subtract(day_in_week, "days");
    week.push({
      day: week_names[index - 1],
      number: subtract_day.add(index, "day").format("DD"),
    });
  }
  return week;
};

console.log(contruct_week(moment("2021-10-23")));
