import { h } from "hyperapp"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import Page from "app/views/pages/Page"
import Heading from "app/views/components/Heading"
import ScrollIcon from "app/views/components/ScrollIcon"
import { Enter, Exit } from "@hyperapp/transitions"
import CircleType from "circletype"
import anime from "animejs"

import { homeMetaTitle, aboutPageUrl } from "app/routes"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = homeMetaTitle
  const key = "khome"

  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        class={cxs({
          textAlign: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media (min-width: 992px)": {
            width: "50%",
          },
        })}
      >
        <Heading brand="light" level={1} margin="0 0 0 0">
          <div
            class={cxs({
              fontSize: pxTo(125, baseFontSize, "rem"),
            })}
            oncreate={(e) =>
              anime({
                targets: e,
                fontSize: [pxTo(125, baseFontSize, "rem"), pxTo(ds.get("typo.sizes.headings.h1"), baseFontSize, "rem")],
                opacity: {
                  duration: 2550,
                  value: [0, 1],
                  delay: 0,
                },
                duration: 1050,
                delay: 3350,
                easing: "easeInOutBack",
                width: "100vw",
              })
            }
          >
            Haaave you<br />read Trump ?
          </div>
        </Heading>

        <Heading brand="light" level={2} margin="0">
          <div
            oncreate={(e) =>
              anime({
                targets: e,
                opacity: [0, 1],
                translateY: [-15, 0],
                delay: 4250,
                duration: 550,
                marginTop: {
                  value: pxTo(40, baseFontSize, "rem"),
                  delay: 3750,
                },
                height: {
                  value: [0, "auto"],
                  delay: 4250,
                  duration: 550,
                },
                easing: "easeInOutSine",
              })
            }
          >
            A deep analysis of the USA President’s tweets
          </div>
        </Heading>

        <div
          class="anime-twitter"
          oncreate={(e) =>
            anime({
              targets: e,
              opacity: [0, 1],
              scale: [0, 1],
              height: {
                value: [0, pxTo(30, baseFontSize, "rem")],
                delay: 4750,
                time: 2050,
              },
              margin: {
                value: "14.32% auto auto auto",
                delay: 4750,
                time: 2050,
              },
              time: 2050,
              delay: 4750,
              easing: "easeInOutBack",
            })
          }
        >
          <svg
            class={cxs({
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 46.5 37.8"
          >
            <path
              d="M0 33.4c4.2 2.7 9.1 4.2 14.4 4.2 17.3 0 26.7-14.3 26.7-26.7V9.7c1.8-1.3 3.4-3 4.7-4.9-1.7.7-3.5 1.2-5.4 1.5 1.9-1.2 3.4-3 4.1-5.2-1.8 1.1-3.8 1.9-6 2.3-1.7-1.8-4.2-3-6.8-3-5.2 0-9.4 4.2-9.4 9.4 0 .7.1 1.4.2 2.1-7.8-.4-14.7-4.1-19.3-9.8-.8 1.4-1.3 3-1.3 4.7 0 3.3 1.7 6.1 4.2 7.8-1.5 0-3-.5-4.3-1.2v.1c0 4.5 3.2 8.3 7.5 9.2-.8.2-1.6.3-2.5.3-.6 0-1.2-.1-1.8-.2 1.2 3.7 4.7 6.4 8.8 6.5-3.2 2.5-7.3 4-11.7 4-.6.2-1.4.1-2.1.1z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div
          class={cxs({
            fontWeight: ds.get("typo.fontWeight.light"),
            fontFamily: ds.get("typo.fontFamily.headings.h2"),
            position: "relative",
            opacity: 0,
            height: 0,
            padding: "0 !important",
            "@media (min-height: 800px)": {
              padding: `${pxTo(55, baseFontSize, "rem")} 0 !important`,
            },
            "@media (min-width: 1200px)": {
              "::before": {
                content: "' '",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "block",
                top: 0,
                height: pxTo(30, baseFontSize, "rem"),
                width: pxTo(2, baseFontSize, "rem"),
                minWidth: "2px",
                backgroundColor: "currentColor",
              },
              "::after": {
                content: "' '",
                bottom: 0,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "block",
                height: pxTo(30, baseFontSize, "rem"),
                width: pxTo(2, baseFontSize, "rem"),
                minWidth: "2px",
                backgroundColor: "currentColor",
              },
            },
          })}
          oncreate={(e) =>
            anime({
              targets: e,
              opacity: 1,
              height: "45vh",
              maxHeight: "450px",
              padding: `${pxTo(55, baseFontSize, "rem")} 0`,
              margin: "11.71875% 0",
              delay: 7500,
              ease: "easeInOutCubic",
              begin: (anim) => {
                anime({
                  targets: ".anime-twitter",
                  scale: 0,
                  margin: 0,
                  height: 0,
                  ease: "easeInOutCubic",
                })
              },
            })
          }
        >
          <p>
            Besides being the new president of The United States and a very contraversal man, Donal Trump is also known
            for his absolute passion: Twitter.
          </p>
          <p>
            With more than 37.4k messages since his subscription, this analysis only run from the 24th October 2016 to
            the 24th November 2016: fifteen days before and after his election.
          </p>
          <p>This represent over 250 tweets.</p>
        </div>
        <div
          oncreate={(e) =>
            anime({
              targets: e,
              opacity: [0, 1],
              height: {
                value: [0, "auto"],
              },
              translateY: "-15px",
              ease: "easeInOutCubic",
              delay: 7500,
            })
          }
        >
          <div
            class={cxs({ fontSize: pxTo(14, baseFontSize, "rem") })}
            oncreate={(e) =>
              anime({
                targets: e,
                translateY: {
                  value: [pxTo(20, baseFontSize, "rem"), pxTo(10, baseFontSize, "rem")],
                  delay: 7850,
                  duration: 5550,
                },
                opacity: {
                  value: [1, 0],
                  delay: 18250,
                  easing: "easeInOutSine",
                  duration: 850,
                },
              })
            }
          >
            <div oncreate={(e) => new CircleType(e).radius(90)}>Use arrows to navigate</div>
          </div>
          <ScrollIcon next={aboutPageUrl} />
        </div>
      </div>
    </Page>
  )
}
