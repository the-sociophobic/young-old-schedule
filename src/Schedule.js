import React from 'react'


const schedule = [
  {
    date: 1,
    time: "16:00-17:30",
    place: "Одноклассники",
    title: "«Сообщества – это новый чёрный?",
    text: "В прямом эфире разбираемся с экспертами и лидерами сообществ в том, что такое комьюнити.",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 2,
    // time: "16:00-17:30",
    place: "Одноклассники",
    title: "Практики заботы: международный и российский опыт",
    text: "Серия материалов в социальных сетях Young Old, посвящённых практикам заботы в разных странах мира, а также региональным российским проектам, работающим в этой области",
    // avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 3,
    time: "16:00-17:30",
    place: "Одноклассники",
    title: "Комьюнити и практики заботы",
    text: "В прямом эфире обсуждаем с лидерами сообществ, что такое практики заботы и зачем они нужны.",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 5,
    time: "14:00-15:30",
    place: "Zoom",
    title: "Мастерская добрососедства",
    text: "Онлайн-мастерская в Zoom, где вместе с экспертами мы будем учиться создавать и развивать сообщества",
    avatarText: "НЕОБХОДИМА ПРЕДВАРИТЕЛЬНАЯ РЕГИСТРАЦИЯ",
  },
  {
    date: 5,
    time: "16:00-17:00",
    place: "Одноклассники",
    title: "Прямой эфир",
    text: "Прямой эфир с Татьяной Кононыгиной, лидером Общественной организации «Знание», г. Орёл",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 6,
    time: "16:00-17:00",
    place: "Одноклассники",
    title: "Прямой эфир",
    text: "Прямой эфир с Людмилой Захаровой, председателем Еврейского общинного культурного центра «Хесед-Тшува», Рязанская област",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 7,
    time: "16:00-17:00",
    place: "Одноклассники",
    title: "Прямой эфир",
    text: "Прямой эфир с Валерием Басаем, лидером общественной организации «Дорогами добра», Свердловская область",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 8,
    time: "16:00-17:00",
    place: "Одноклассники",
    title: "Прямой эфир",
    text: "Прямой эфир с Ириной Кондрашиной, лидером общественной организации «Высота», г. Волгоград",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 10,
    time: "12:00-14:00",
    place: "Одноклассники",
    title: "Паблик-ток «Могут ли маленькие сообщества решать большие проблемы?",
    // text: "",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
]


class Schedule extends React.Component {
  render = () => {
    const mappedDays = schedule.map(day =>
      <div
        key={day.text}
        className="schedule__day"
      >
        <div className="schedule__day__date">
          {day.date}/12
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="schedule__day__time">
            {day.time}
          </div>
          <div className="schedule__day__place">
            {day.place}
          </div>
        </div>
        <div className="schedule__day__title">
          {day.title}
        </div>
        <div className="schedule__day__text">
          {day.text}
        </div>
        <div className="row justify-content-start align-items-center px-4">
          <div className="schedule__day__avatar" />
          <div className="schedule__day__avatar-text">
            {day.avatarText}
          </div>
        </div>
      </div>
    )
  
    return (
      <div className="schedule">
        <div className="container">
          <h1 className="h1 mb-5">
            Расписание проекта
          </h1>

          <div className="row d-none d-lg-flex">
            <div className="col-4 d-flex flex-column">
              {mappedDays[0]}{mappedDays[3]}{mappedDays[6]}
            </div>
            <div className="col-4 d-flex flex-column">
              {mappedDays[1]}{mappedDays[4]}{mappedDays[7]}
            </div>
            <div className="col-4 d-flex flex-column">
              {mappedDays[2]}{mappedDays[5]}{mappedDays[8]}
            </div>
          </div>
          <div className="d-flex flex-column d-lg-none">
            {mappedDays}
          </div>
        </div>
      </div>
    )
  }
}


export default Schedule