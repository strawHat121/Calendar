let date = new Date();

let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let dt = document.getElementById("date");

function createCalendar(elem, year, month) {
  let mon = month; // months in JS are 0..11, not 1..12
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";

    if (getDay(d) % 7 == 6) {
      // sunday, last day of week - newline
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // close the table
  table += "</tr></table>";

  elem.innerHTML = table;
  let m;
  switch (month) {
    case 0:
      m = "January";
      break;
    case 1:
      m = "February";
      break;
    case 2:
      m = "March";
      break;
    case 3:
      m = "April";
      break;
    case 4:
      m = "May";
      break;
    case 5:
      m = "June";
      break;
    case 6:
      m = "July";
      break;
    case 7:
      m = "August";
      break;
    case 8:
      m = "September";
      break;
    case 9:
      m = "October";
      break;
    case 10:
      m = "November";
      break;
    case 11:
      m = "December";
      break;
  }
  dt.innerHTML = `<p>${m} ${year}</p>`;
}

function getDay(date) {
  // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay();
  if (day == 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear += 1;
  } else currentMonth += 1;
  createCalendar(calendar, currentYear, currentMonth);
}

function previousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear -= 1;
  } else currentMonth -= 1;
  createCalendar(calendar, currentYear, currentMonth);
}

createCalendar(calendar, date.getFullYear(), date.getMonth());
