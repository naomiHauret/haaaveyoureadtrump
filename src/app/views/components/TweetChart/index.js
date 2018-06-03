import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import Chart from "chart.js"

export default ({ categories, tweets }) => {
  const baseFontSize = ds.get("typo.sizes.base")
  //const tweetDates = [...new Set(tweets.map(t => t.date))] // all dates possible (unique)
  //const tweetsByDate = tweetDates.map(d => tweets.filter(tweet => tweet.date = d) )
  //const tweetsByCategories = [...categories.map(category => tweets.filter(tweet => tweet.categories === category))]
  //console.log(tweets.filter(tweet => tweet.categories ==="Crooked Hilary").map(t => t.date) )
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
              labels: ["8th Oct.", "8th Nov", "24th Nov"],
              datasets: [
                {
                  label: "My First dataset",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [
                    {
                      x: 10,
                      y: 20,
                    },
                    {
                      x: 15,
                      y: 10,
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
                  data: [28, 48, 40, 19, 86, 27, 90],
                },
              ],
            },
          })
        }
      />
    </div>
  )
}
