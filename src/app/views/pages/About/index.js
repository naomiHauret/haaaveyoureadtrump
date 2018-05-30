import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Heading from "app/views/components/Heading"
import Trump from "app/views/components/Trump"
import ScrollIcon from "app/views/components/ScrollIcon"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { aboutMetaTitle } from "app/routes"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = aboutMetaTitle
  const key = "kabout"

  return (
    <Page state={state} actions={actions} metaTitle={aboutMetaTitle} key={key}>
      <div
        class={cxs({
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div class={cxs({ alignSelf: "flex-start", marginBottom: ds.pxTo(35, baseFontSize, "rem") })}>
          <Heading level={1} brand="dark">
            Meet<br />Donald
          </Heading>
        </div>
        <div
          class={cxs({
            position: "relative",
            width: `${6 / 12 * 100}%`,

            "@media (min-width: 1199px)": {
              width: `${4 / 12 * 100}%`,
            },
            "> p": {
              position: "absolute",
              transition: "all 450ms ease-in-out",
              margin: 0,
              fontSize: ds.pxTo(ds.get("typo.sizes.legend"), baseFontSize, "rem"),
              lineHeight: ds.pxTo(ds.get("typo.sizes.legend") + 4, baseFontSize, "rem"),
            },
          })}
        >
          <p
            class={cxs({
              bottom: 0,
              right: 0,
              opacity: state.aboutVisibleParagraph === "eyes" ? 1 : 0,
              "@media (min-width: 768px)": {
                transform: "translate(125%, 125%)",
              },
              "@media (min-width: 1199px)": {
                transform: state.aboutVisibleParagraph === "eyes" ? "translate(calc(100% + 75px), -226%)" : "translate(calc(100% + 50px), -220%)",
              },
            })}
          >
            Born on June 14th, 1946 in<br /> New-York, son of Fred and<br /> Mary Anne Trump and<br /> brother of four
            other kids
          </p>
          <p
            class={cxs({
              bottom: 0,
              right: 0,
              opacity: state.aboutVisibleParagraph === "tie" ? 1 : 0,
              "@media (min-width: 768px)": {
                transform: "translate(172%, -25%)",
              },
              "@media (min-width: 1199px)": {
                transform: state.aboutVisibleParagraph === "tie" ? "translate(calc(100% + 75px), -15px)" : "translate(calc(100% + 50px), 5px)" ,
              },
            })}
          >
            First a realtor with his<br /> father, Donald also began<br /> the owner of several<br /> casinos, golf
            fields, football<br /> leagues, some beauty<br /> contests and, of course, of<br /> the Trump Tower.
          </p>
          <p
            class={cxs({
              left: 0,
              bottom: 0,
              transform: state.aboutVisibleParagraph === "mouth" ? "translate(calc(-50%  + -30px), calc(100% + 40px))" : "translate(calc(-50%  + -10px), calc(100% + 20px))",
              opacity: state.aboutVisibleParagraph === "mouth" ? 1 : 0,
            })}
          >
            Created his twitter account<br /> on May 4th of 2009. He posted<br /> over 37,4k messages since.
          </p>
          <p
            class={cxs({
              left: 0,
              top: 0,
              transform: state.aboutVisibleParagraph === "cheeks" ? "translate(-100%, calc(100% + 40px))" : "translate(calc(-100% + 20px), calc(100% + 20px))",
              opacity: state.aboutVisibleParagraph === "cheeks" ? 1 : 0,
            })}
          >
            After two divorces, Donald<br /> is now maried to Melania<br /> Knavs since 2005
          </p>
          <p
            class={cxs({
              left: 0,
              top: 0,
              transform: state.aboutVisibleParagraph ===  "hair" ? "translate(calc(100% + 75px), calc(-100% + -8px))" : "translate(calc(100% + 95px), calc(-100% + 8px))" ,
              opacity: state.aboutVisibleParagraph === "hair" ? 1 : 0,
            })}
          >
            Now at the head of a 3.1<br /> billion dollars fortune,<br /> Donald is the 248th richest<br /> man in the
            US, and the<br /> 766th on the world ranking
          </p>
          <Trump showParagraph={actions.setVisibleAboutParagraph} />
        </div>
      </div>
      <div class={cxs({ color: ds.get("colors.texts.navigation"), marginBottom: ds.pxTo(65, baseFontSize, "rem") })}>
        <ScrollIcon />
      </div>
    </Page>
  )
}
