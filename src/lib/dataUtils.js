// 윤년 구하는 공식에서 366 일이 되는 케이스만 분기로 적용
function leapYear(yyyy) {
  return (yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0;
}

let BasicDay = {
  year: 2020, 
  month: 1, 
  day: 1,
  hour: 0, 
  minites: 0
};

let benchmarkDay = {
  year: 1900, 
  month: 1, 
  day: 1,
  hour: 0, 
  minites: 0
}; 

function createTodayObj() {
  let date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours().toString(),
    minute: date.getMinutes.toString()
  }
}

function todayHyphenString() {
  const today = createTodayObj();
  return today.year + '-' + today.month + '-' + ((today.day < 10) ? '0' + today.day : today.day);
}

function getDayOfWeek(date) {
  // 1년 1월 1일 = 월요일 기준으로 계산
  // 1년 1월 1일 ~ 특정 날짜를 일자로 / 7 하면 요일 확인 가능
  const today = createTodayObj();
  let total = 365 * (today.year - 1);
  
  // 1년 ~ 특정 년도 까지의 윤년 수 만큼 총 일자를 총 일자에 더함
  const year = today.year
  total = year + 3 / 4 - year + 99 / 100 + year + 399 / 400;
}