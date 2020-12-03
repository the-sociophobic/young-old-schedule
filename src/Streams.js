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


const videos = [
  {
    date: 1,
    time: "16:00-17:30",
    link: "//ok.ru/videoembed/2311164536272",
    title: "Сообщества – это новый чёрный?",
    place: "Площадка",
  },
  {
    date: 3,
    time: "16:00-17:30",
    // link: "",
    title: "Комьюнити и практики заботы",
    place: "Площадка",
  },
  {
    date: 10,
    time: "11:30-13:30",
    // link: "",
    title: "Паблик-ток «Могут ли маленькие сообщества решать большие проблемы?»",
    place: "Площадка",
  },
]


class Item  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.date = new Date(`2020-12-${clockLike(props.date)}T${props.time.slice(0, 5)}:00`)

    this.interval = setInterval(this.updateCountdown, 1000)
  }

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
          <Video src={this.props.link} />
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
                <div className={`streams__item__video__countdown__number streams__item__video__countdown__number--${number}`}>
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
              <Item {...item} />
            )}
          </div>
        </div>
      </div>
    )
  }
}


export default Streams