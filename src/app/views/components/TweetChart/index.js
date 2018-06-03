import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import Chart from "chart.js"

export default ({ categories, tweets }) => {
  const baseFontSize = ds.get("typo.sizes.base")
  const tweetDates = [...new Set(tweets.map((t) => t.date))] // all dates possible (unique)
  const lineColors = ds.get("colors.chartLines")
  const tweetsByDateByCategories = []
  const tweetsData = []

  console.log(lineColors)
  /*   tweetDates.forEach((date) => {
    tweetsByDateByCategories[`${date}`] = []
     categories.forEach((category) => {
       tweetsByDateByCategories[`${date}`][`${category}`] = tweets.filter((tweet) => (tweet.categories === category && tweet.date === date))
     })
  })

    tweetDates.forEach((date) => {
      tweetsData[`${tweetDates.indexOf(date)}`] = {}
      categories.forEach((category) => {
        tweetsData[`${date}`][`${category}`] = tweets.filter((tweet) => tweet.categories === category && tweet.date === date)
      })
    })
 */

  return (
    <div key="tweetswrapper" class={cxs({ width: "100%" })}>
      <canvas
        id="tweetChart"
        key="tweetssss"
        oncreate={(e) =>
          new Chart(document.getElementById("tweetChart"), {
            type: "line",
            options: {
              defaultFontColor: (Chart.defaults.global.defaultFontColor = "white"),
              defaultFontSize: (Chart.defaults.global.defaultFontSize = 16),
              defaultFontFamily: (Chart.defaults.global.defaultFontFamily = ds.get("typo.fontFamily.base")),
              tooltips: {
                backgroundColor: ds.get("colors.backgrounds.medium"),
                xPadding: 35,
                yPadding: 15,
                caretSize: 0,
                cornerRadius: 0,
                titleMarginBottom: 15,
                titleFontFamily: ds.get("typo.fontFamily.tooltip.title"),
                titleFontSize: 14,
                bodyFontSize: 14,
                borderWidth: 0,
                footerMarginTop: 15,
                footerFontSize: 20,
                displayColors: false,
                callbacks: {
                  title: (tooltipItem, data) => {
                    return data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].date
                  },

                  label: (tooltipItem, data) => {
                    return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].category
                  },

                  footer: (tooltipItem, data) => {
                    return `${data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].y} tweets`
                  },
                },
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                      color: "white",
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                      color: "white",
                    },
                  },
                ],
              },
            },
            data: {
              labels: ["24th Oct.", "8th Nov", "24th Nov"],
              datasets: [
                {
                  label: "Yolo",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [
                    {
                      x: 10,
                      y: 20,
                      category: "Oh yeah ´",
                      content: "blablablablabla",
                      date: "une date random",
                    },
                    {
                      x: 12,
                      y: 8,
                      category: "Oh yeah ´",
                      content: "eefj",
                      date: "une  random",
                    },
                    {
                      x: 15,
                      y: 10,
                      category: "Oh yeah ´",
                      content: "blabblabla",
                      date: "une date ",
                    },
                    {
                      x: 20,
                      y: 2,
                      category: "Oh yeah ´",
                      content: "blablablablabla",
                      date: "une date random",
                    },
                  ],
                },
                {
                  label: "My Second dataset",
                  strokeColor: "rgba(151,187,205,1)",
                  pointColor: "rgba(151,187,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,187,205,1)",
                  data: [
                    {
                      x: 5,
                      y: 8,
                      category: "Oh yeah ´",
                      content: "blablablablabla",
                      date: "une date random",
                    },
                    {
                      x: 10,
                      y: 2,
                      category: "Oh yeah ´",
                      content: "blablablablabla",
                      date: "une date random",
                    },
                  ],
                },
              ],
            },
          })
        }
      />
    </div>
  )
}
