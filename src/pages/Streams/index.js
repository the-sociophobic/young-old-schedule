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

import cover from './covers/young old cover 2021.jpg'


const videos = [
  {
    date: 24,
    time: "15:00",
    link: "//ok.ru/videoembed/2765743138256",
    title: "Забота рядом: лучшие практики конкурса «Ближний круг»",
    // place: "Одноклассники",
    cover: 'https://sun9-8.userapi.com/impg/LZeP7-8LmA9ZPEk01p7rAN3N8ecvy5uUcmyhfA/c7S6uKyqe-M.jpg?size=1140x570&quality=96&sign=a0c4054e3645bf80904840a4cf43a8f4&type=album',
  },
  {
    date: 26,
    time: "15:00",
    link: "//ok.ru/videoembed/2770121336272",
    title: "О соседских сообществах: разговор с Ириной Кондрашиной, ТОС «Высота»",
    // place: "Площадка",
    cover: 'https://sun9-8.userapi.com/impg/LZeP7-8LmA9ZPEk01p7rAN3N8ecvy5uUcmyhfA/c7S6uKyqe-M.jpg?size=1140x570&quality=96&sign=a0c4054e3645bf80904840a4cf43a8f4&type=album',
  },
  {
    date: 31,
    time: "18:00",
    link: "//ok.ru/videoembed/2782754448848",
    title: "Как найти «невидимых» пожилых и начать помогать им? Прямой эфир с Надеждой Калякиной, проект «Забытые живые»",
    // place: "Zoom",
    cover: 'https://sun9-8.userapi.com/impg/LZeP7-8LmA9ZPEk01p7rAN3N8ecvy5uUcmyhfA/c7S6uKyqe-M.jpg?size=1140x570&quality=96&sign=a0c4054e3645bf80904840a4cf43a8f4&type=album',
  },
  {
    date: 3,
    time: "18:00",
    link: "//ok.ru/videoembed/2789295334864",
    title: "Как конструктивно общаться с пожилыми? Эфир с писателем Александром Галицким",
    // place: "Zoom",
    cover: 'https://sun9-8.userapi.com/impg/LZeP7-8LmA9ZPEk01p7rAN3N8ecvy5uUcmyhfA/c7S6uKyqe-M.jpg?size=1140x570&quality=96&sign=a0c4054e3645bf80904840a4cf43a8f4&type=album',
  },
]


class Item  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.date = new Date(`2021-0${props.date === 3 ? 6 : 5}-${clockLike(props.date)}T${props.time.slice(0, 5)}:00`)
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
          {`${this.props.date}/${this.props.date === 3 ? '06' : '05'}`}
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