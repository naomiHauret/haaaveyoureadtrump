import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import Chart from "chart.js"

export default ({ categories, tweets }) => {
  const baseFontSize = ds.get("typo.sizes.base")
  const lineColors = ds.get("chartLines")

  let tweetDates = [...new Set(tweets.map((t) => t.date))] // all dates possible (unique)
  let tweetsData = []

  categories.forEach((category, index) => {
    let item = {
      label: category,
      borderColor: lineColors[index].color,
      borderDash: lineColors[index].dash,
      fill: false,
      data: [],
    }

    tweetDates.forEach((date) => {
        item.data.push({
          x: tweetDates.indexOf(date),
          y: tweets.filter((tweet) => tweet.categories === category && tweet.date === date).length,
          category,
          date,
        })
    })

    tweetsData.push(item)
  })
  
  return <div key="tweetswrapper" class={cxs({ width: "100%" })}>
      <canvas id="tweetChart" key="tweetssss" oncreate={(e) => new Chart(document.getElementById("tweetChart"), {
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
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 2,
                      maxRotation: 0,
                    },
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
              labels: tweetDates,
              datasets: tweetsData,
            },
          })}
          />
    </div>
}
