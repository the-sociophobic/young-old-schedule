import './index.sass'


const schedule = [
  {
    date: 1,
    time: "16:00-17:30",
    place: "Площадка",
    title: "«Сообщества – это новый чёрный?",
    text: "В прямом эфире разбираемся с экспертами и лидерами сообществ в том, что такое комьюнити.",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 2,
    // time: "16:00-17:30",
    place: "Площадка",
    title: "Практики заботы: международный и российский опыт",
    text: "Серия материалов в социальных сетях Young Old, посвящённых практикам заботы в разных странах мира, а также региональным российским проектам, работающим в этой области",
    // avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 3,
    time: "16:00-17:30",
    place: "Площадка",
    title: "Комьюнити и практики заботы",
    text: "В прямом эфире обсуждаем с лидерами сообществ, что такое практики заботы и зачем они нужны.",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 4,
    time: "14:00-15:30",
    place: "Площадка",
    title: "Мастерская добрососедства",
    text: "Онлайн-мастерская в Zoom, где вместе с экспертами мы будем учиться создавать и развивать сообщества",
    avatarText: "НЕОБХОДИМА ПРЕДВАРИТЕЛЬНАЯ РЕГИСТРАЦИЯ",
  },
  {
    date: 5,
    time: "16:00-17:00",
    place: "Площадка",
    title: "Прямой эфир",
    text: "Прямой эфир с Татьяной Кононыгиной, лидером Общественной организации «Знание», г. Орёл",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 6,
    time: "16:00-17:00",
    place: "Площадка",
    title: "Прямой эфир",
    text: "Прямой эфир с Людмилой Захаровой, председателем Еврейского общинного культурного центра «Хесед-Тшува», Рязанская област",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 7,
    time: "16:00-17:00",
    place: "Площадка",
    title: "Прямой эфир",
    text: "Прямой эфир с Валерием Басаем, лидером общественной организации «Дорогами добра», Свердловская область",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 8,
    time: "16:00-17:00",
    place: "Площадка",
    title: "Прямой эфир",
    text: "Прямой эфир с Ириной Кондрашиной, лидером общественной организации «Высота», г. Волгоград",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
  {
    date: 10,
    time: "11:30-12:30",
    place: "Площадка",
    title: "Паблик-ток «Могут ли маленькие сообщества решать большие проблемы?",
    // text: "",
    avatarText: "Прямой эфир на странице Young Old в сети «Одноклассники»",
  },
]


function App() {
  const mappedDays = schedule.map(day =>
    <div
      key={day.date}
      className="App__day"
    >
      <div className="App__day__date">
        {day.date}/12
      </div>
      <div className="d-flex justify-content-between mb-2">
        <div className="App__day__time">
          {day.time}
        </div>
        <div className="App__day__place">
          {day.place}
        </div>
      </div>
      <div className="App__day__title">
        {day.title}
      </div>
      <div className="App__day__text">
        {day.text}
      </div>
      <div className="row justify-content-start align-items-center px-4">
        <div className="App__day__avatar" />
        <div className="App__day__avatar-text">
          {day.avatarText}
        </div>
      </div>
    </div>
  )

  return (
    <div className="App">
      <h2 className="h2">
        Расписание проекта
      </h2>

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
  )
}

export default App
