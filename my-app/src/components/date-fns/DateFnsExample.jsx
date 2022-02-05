import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

import { add, format, sub } from "date-fns";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";
import differenceInHours from "date-fns/differenceInHours";

export default function Momentexample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnsDate = addWeeks(newDateFnsDate, 1);
  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(cloneNewDateFnsDate, "yyyy-MM-dd")}
        <br />

        <div>Summer Time (New-York)</div>
        <div>
          2018년 3월 10일 13시에 하루 더하기 :
          {moment
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <br />
        <div>Summer Time (New-York)</div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기 :
          {moment
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(24, "hour")
            .format()}
        </div>
        <br />
        <div>Leap year (korea)</div>
        <div>
          2017년 1월 1일 1년 빼기 :
          {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
        </div>
        <br />
        <div>Leap year (korea)</div>
        <div>
          2017년 1월 1일 365일 빼기 :
          {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        </div>
        <br />
        <div>한국어로 표기하기 07-17-2021을 2021년 7월 17일로 표기</div>
        <div>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</div>
        <br />
        <div>자기 생일 요일 찾기</div>
        <div>
          <input
            type="date"
            ref={birthDayRef}
            onChange={handleBirthDayChange}
          />
          <div>무슨요일이었을까?</div>
          <div>{day}</div>
        </div>
        <br />
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>
          {differenceInHours(
            new Date(2017, 7, 17, 3, 0),
            new Date(2017, 7, 18, 2, 0)
          )}
          시간
        </div>
        <div></div>
      </div>
    </div>
  );
}
