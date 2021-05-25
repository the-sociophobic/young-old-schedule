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
    link: "//ok.ru/videoembed/2331636211408",
    title: "Паблик-ток «Практики заботы России: проблемы и перспективы»",
  },
  {
    link: "//ok.ru/videoembed/2311164536272",
    title: "Онлайн-дискуссия о создании сообществ",
  },
  {
    link: "//ok.ru/videoembed/2316177122768",
    title: "Практики заботы: российский опыт ",
  },
  {
    link: "//ok.ru/videoembed/2321840416208",
    title: "Проект «Телефонные цепи», эфир с Татьяной Кононыгиной",
  },
  {
    link: "//ok.ru/videoembed/2328238761424",
    title: "Проект «Хэсед-Тшува», эфир с Людмилой Захаровой",
  },
  {
    link: "//ok.ru/videoembed/2331230479824",
    title: "Соседское сообщество ТОС «Высота», эфир с Ириной Кондрашиной",
  },
]


class Item  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    // this.date = new Date(`2020-12-${clockLike(props.date)}T${props.time.slice(0, 5)}:00`)
  }

  // componentDidMount = () =>
  //   this.interval = setInterval(this.updateCountdown, 1000)

  // updateCountdown = () => {
  //   var tmpCurrentDate = new Date()
  //   const days = differenceInDays(this.date, tmpCurrentDate)

  //   tmpCurrentDate = subDays(tmpCurrentDate, -days)
  //   const hours = differenceInHours(this.date, tmpCurrentDate)

  //   tmpCurrentDate = subHours(tmpCurrentDate, -hours)
  //   const minutes = differenceInMinutes(this.date, tmpCurrentDate)

  //   tmpCurrentDate = subMinutes(tmpCurrentDate, -minutes)
  //   const seconds = differenceInSeconds(this.date, tmpCurrentDate)

  //   this.setState({
  //     days: clockLike(days),
  //     daysDesc: countable(days, ["день", "дня", "дней"]),
  //     hours: clockLike(hours),
  //     hoursDesc: countable(hours, ["час", "часа", "часов"]),
  //     minutes: clockLike(minutes),
  //     minutesDesc: countable(minutes, ["минута", "минуты", "минут"]),
  //     seconds: clockLike(seconds),
  //     secondsDesc: countable(seconds, ["секунда", "секунды", "секунд"]),
  //   })
  // }

  // componentWillUnmount = () =>
  //   clearInterval(this.interval)

  render = () =>
    <div
      key={this.props.date}
      // className={`streams__item ${this.props.link && "streams__item--active"}`}
      className="streams__item"
    >
      <div className="streams__item__upper">
        {/* <div className="streams__item__upper__date">
          {this.props.date}/12
        </div> */}
        <div className="streams__item__upper__title">
          {this.props.title}
        </div>
      </div>

      <div className="streams__item__video">
        <Video
          src={this.props.link}
          cover={this.props.cover}
          title={this.props.link}
        />
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
              Полезные материалы проекта
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