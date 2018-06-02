import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import lottie from "lottie-web"

const animationImgProdPath = "/assets/images/animations/"

let tieAnimation
let hairAnimation
let mouthAnimation
let eyesAnimation
let cheeksAnimation

export default ({ showParagraph }) => (
  <div
    oncreate={() => {
      tieAnimation = lottie.loadAnimation({
        container: document.getElementById("tieAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require('assets/animations/tie/tie-only.json'),
        assetsPath: `${animationImgProdPath}/tie/`,
      })
      tieAnimation.setSpeed(1.5)

      hairAnimation = lottie.loadAnimation({
        container: document.getElementById("hairAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require('assets/animations/hair/hair-only.json'),
        assetsPath: `${animationImgProdPath}/hair/`,
      })
      hairAnimation.setSpeed(1.5)

      mouthAnimation = lottie.loadAnimation({
        container: document.getElementById("mouthAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require('assets/animations/mouth/mouth-only.json'),
        assetsPath: `${animationImgProdPath}/mouth/`,
      })
      mouthAnimation.setSpeed(1.5)
      mouthAnimation.onComplete = () => mouthAnimation.goToAndStop(0, false)

      cheeksAnimation = lottie.loadAnimation({
        container: document.getElementById("cheeksAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require('assets/animations/cheeks/cheeks-only.json'),
        assetsPath: `${animationImgProdPath}/cheeks/`,
      })
      cheeksAnimation.setSpeed(1.5)
      cheeksAnimation.onComplete = () => cheeksAnimation.goToAndStop(0, false)

      eyesAnimation = lottie.loadAnimation({
        container: document.getElementById("eyesAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require('assets/animations/eyes/eyes-only.json'),
        assetsPath: `${animationImgProdPath}/eyes/`,
      })
      eyesAnimation.setSpeed(1.25)
      eyesAnimation.onComplete = () => eyesAnimation.goToAndStop(0, false)
    }}
  >
    <div
      class={cxs({
        width: "355px", //450
        height: "311px",//395
        position: "relative",
        margin: "auto",
        "> div": {
          position: "absolute",
        },
      })}
    >
      <img
        src={require('assets/images/content/shadows/trump.svg')} // * 0.78
        class={cxs({
          width: "372px", // 472
          height: "321px", // 407
          position: "absolute",
          top: "-17px",
          left: "-27px",
          zIndex: 0,
        })}
      />
      <img
        src={require('assets/images/content/trumpBody.png')}
        class={cxs({
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        })}
      />
      <div
        id="hairAnimation"
        class={cxs({
          width: "100%",
          top: 0,
          left: 0,
          transform: "translate(-50px, -27px)",
          zIndex: 1,
        })}
        onmouseenter={() => {
          hairAnimation.loop = true
          hairAnimation.play()
          showParagraph({ el: "hair" })
        }}
        onmouseleave={() => {
          showParagraph({ el: null })
          hairAnimation.loop = false
          hairAnimation.goToAndStop(0, false)
        }}
      />
      <div
        id="eyesAnimation"
        class={cxs({
          top: 0,
          left: 0,
          zIndex: 1,
          width: "205px",
          transform: "translate(70px, 85px)",
        })}
        onmouseenter={() => {
          eyesAnimation.loop = true
          eyesAnimation.play()
          showParagraph({ el: "eyes" })
        }}
        onmouseleave={() => {
          showParagraph({ el: null })
          eyesAnimation.loop = false
          eyesAnimation.goToAndStop(0, false)
        }}
      />
      <div
        id="mouthAnimation"
        class={cxs({
          top: 0,
          left: 0,
          zIndex: 1,
          width: "182px",
          transform: "translate(82px, 162px)",
        })}
        onmouseenter={() => {
          mouthAnimation.loop = true
          mouthAnimation.play()
          showParagraph({ el: "mouth" })
        }}
        onmouseleave={() => {
          showParagraph({ el: null })
          mouthAnimation.loop = false
          mouthAnimation.goToAndStop(0, false)
        }}
      />
      <div
        id="cheeksAnimation"
        class={cxs({
          top: 0,
          left: 0,
          zIndex: 0,
          width: "266px",
          transform: "translate(44px, 122px)",
          opacity: 0.3,
        })}
        onmouseenter={() => {
          showParagraph({ el: "cheeks" })
          cheeksAnimation.loop = true
          cheeksAnimation.play()
        }}
        onmouseleave={() => {
          showParagraph({ el: null })
          cheeksAnimation.loop = false
          cheeksAnimation.goToAndStop(0, false)
        }}
      />
      <div
        id="tieAnimation"
        class={cxs({
          bottom: 0,
          left: 0,
          zIndex: 1,
          transform: "translate(26px, 89px)",
        })}
        onmouseenter={() => {
          showParagraph({ el: "tie" })
          tieAnimation.loop = true
          tieAnimation.play()
        }}
        onmouseleave={() => {
          showParagraph({ el: null })
          tieAnimation.loop = false
          tieAnimation.goToAndStop(0, false)
        }}
      />
    </div>
  </div>
)
