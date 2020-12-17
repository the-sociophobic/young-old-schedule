import React from 'react'

import {
  differenceInDays,
  subDays,
  differenceInHours,
  subHours,
  differenceInMinutes,
  subMinutes,
  differenceInSeconds
} from 'date-fns'

import countable from 'utils/countable'
import clockLike from 'utils/clockLike'
import Video from 'components/Video'

import cover0 from './covers/сообщество.png'
import cover1 from './covers/Практики_общественной_заботы_Российский_опыт.png'
import cover2 from './covers/Прямой_эфир_с_Татьяной_Кононыгиной,_проект_«Телефонные_цепи».png'
import cover3 from './covers/Прямой_эфир_с_Людмилой_Захаровой,_еврейский_общинный_центр_«Хесед.png'
import cover4 from './covers/Прямой_эфир_с_Валерием_Басаем,_проект_«Дорогами_добра».png'
import cover5 from './covers/Прямой_эфир_с_Людмилой_Кондрашиной,_ТОС_«Высота».png'

const videos = [
  {
    date: 1,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2311164536272",
    title: "Сообщества – это новый чёрный?",
    place: "Одноклассники",
    cover: cover0,
  },
  {
    date: 3,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2316177122768",
    title: "Комьюнити и практики заботы",
    place: "Площадка",
    cover: cover1,
  },
  {
    date: 5,
    time: "14:00-15:30",
    link: "https://www.youtube.com/embed/D7kjsAjIUH0",
    title: "Практическая мастерская «Как построить сообщество вокруг себя»",
    place: "Zoom",
  },
  {
    date: 5,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2321840416208",
    title: "Прямой эфир с Татьяной Кононыгиной - Проект «Телефонные цепи»",
    place: "Одноклассники",
    cover: cover2,
  },
  {
    date: 6,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2328238761424",
    title: "Прямой эфир с Людмилой Захаровой, председателем Еврейского общинного культурного центра «Хесед-Тшува», Рязанская область",
    place: "Одноклассники",
    cover: cover3,
  },
  {
    date: 7,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2334079002064",
    title: "Прямой эфир с Валерием Басаем, лидером общественной организации «Дорогами добра», Свердловская область",
    place: "Одноклассники",
    cover: cover4,
  },
  {
    date: 8,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2331230479824",
    title: "Прямой эфир с Ириной Кондрашиной, лидером общественной организации «Высота», г. Волгоград",
    place: "Одноклассники",
    cover: cover5,
  },
  {
    date: 10,
    time: "11:30-13:30",
    link: "//ok.ru/videoembed/2331636211408",
    title: "Паблик-ток «Могут ли маленькие сообщества решать большие проблемы?»",
    place: "Площадка",
  },
]


class Item  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.date = new Date(`2020-12-${clockLike(props.date)}T${props.time.slice(0, 5)}:00`)
  }

  componentDidMount = () =>
    this.interval = setInterval(this.updateCountdown, 1000)

  updateCountdown = () => {
    var tmpCurrentDate = new Date()
    const days = differenceInDays(this.date, tmpCurrentDate)

    tmpCurrentDate = subDays(tmpCurrentDate, -days)
    const hours = differenceInHours(this.date, tmpCurrentDate)

    tmpCurrentDate = subHours(tmpCurrentDate, -hours)
    const minutes = differenceInMinutes(this.date, tmpCurrentDate)

    tmpCurrentDate = subMinutes(tmpCurrentDate, -minutes)
    const seconds = differenceInSeconds(this.date, tmpCurrentDate)

    this.setState({
      days: clockLike(days),
      daysDesc: countable(days, ["день", "дня", "дней"]),
      hours: clockLike(hours),
      hoursDesc: countable(hours, ["час", "часа", "часов"]),
      minutes: clockLike(minutes),
      minutesDesc: countable(minutes, ["минута", "минуты", "минут"]),
      seconds: clockLike(seconds),
      secondsDesc: countable(seconds, ["секунда", "секунды", "секунд"]),
    })
  }

  componentWillUnmount = () =>
    clearInterval(this.interval)

  render = () =>
    <div
      key={this.props.date}
      // className={`streams__item ${this.props.link && "streams__item--active"}`}
      className="streams__item"
    >
      <div className="streams__item__upper">
        <div className="streams__item__upper__date">
          {this.props.date}/12
        </div>
        <div className="streams__item__upper__title">
          {this.props.title}
        </div>
      </div>

      <div className="streams__item__video">
        {this.props.link ?
          <Video
            src={this.props.link}
            cover={this.props.cover}
            title={this.props.link}
          />
          :
          <>
            <div className="streams__item__video__time">
              {this.props.time}
            </div>
            <div className="streams__item__video__place">
              {this.props.place}
            </div>

            <div className="streams__item__video__button">
              СМОТРЕТЬ
            </div>

            <div className="streams__item__video__time-left">
              До эфира осталось
            </div>
            <div className="streams__item__video__loader" />
            <div className="streams__item__video__countdown">
              {["days", "hours", "minutes", "seconds"].map(number =>
                <div
                  key={number}
                  className={`streams__item__video__countdown__number streams__item__video__countdown__number--${number}`}
                >
                  {this.state[number]}
                  <div className="streams__item__video__countdown__number__desc">
                    {this.state[`${number}Desc`]}
                  </div>
                </div>
              ).reduce((a, b) =>
                <>
                  {a}<div className="streams__item__video__countdown__colon">:</div>{b}
                </>
              )}
            </div>
          </>
        }
      </div>
    </div>
}


class Streams extends React.Component {
  render = () => {
    return (
      <div className="streams">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <h1 className="h1 mb-5">
              Прямые эфиры<br />и видео проекта
            </h1>
            {videos.map(item =>
              <Item
                key={item.title}
                {...item}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}


export default Streams