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

export default ({ showParagraph, paragraph }) => (
  <div
    oncreate={() => {
      tieAnimation = lottie.loadAnimation({
        container: document.getElementById("tieAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require("assets/animations/tie/tie-only.json"),
        assetsPath: `${animationImgProdPath}/tie/`,
      })
      tieAnimation.setSpeed(1.5)

      hairAnimation = lottie.loadAnimation({
        container: document.getElementById("hairAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require("assets/animations/hair/hair-only.json"),
        assetsPath: `${animationImgProdPath}/hair/`,
      })
      hairAnimation.setSpeed(1.5)

      mouthAnimation = lottie.loadAnimation({
        container: document.getElementById("mouthAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require("assets/animations/mouth/mouth-only.json"),
        assetsPath: `${animationImgProdPath}/mouth/`,
      })
      mouthAnimation.setSpeed(1.5)
      mouthAnimation.onComplete = () => mouthAnimation.goToAndStop(0, false)

      cheeksAnimation = lottie.loadAnimation({
        container: document.getElementById("cheeksAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require("assets/animations/cheeks/cheeks-only.json"),
        assetsPath: `${animationImgProdPath}/cheeks/`,
      })
      cheeksAnimation.setSpeed(1.5)
      cheeksAnimation.onComplete = () => cheeksAnimation.goToAndStop(0, false)

      eyesAnimation = lottie.loadAnimation({
        container: document.getElementById("eyesAnimation"),
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: require("assets/animations/eyes/eyes-only.json"),
        assetsPath: `${animationImgProdPath}/eyes/`,
      })
      eyesAnimation.setSpeed(1.25)
      eyesAnimation.onComplete = () => eyesAnimation.goToAndStop(0, false)
    }}
  >
    <div
      class={cxs({
        width: "355px", //450
        height: "311px", //395
        position: "relative",
        margin: "auto",
        "> div": {
          position: "absolute",
        },
      })}
    >
      <svg
        class={cxs({
          position: "absolute",
          zIndex: 2,
          top: "-10px",
          left: "190px",
          pointerEvents: "none",
          transition: "all 450ms ease-in-out",
          width: paragraph === "hair" ? "100%" : 0,
        })}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="165"
        height="104"
      >
        <image
          width="165"
          height="104"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABoCAQAAAA6VPg7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBgILDDFDL43VAAABnUlEQVR42u3dsWrCUABG4T9BfIB26qhQF/tKnbq71U4uHe1Sx0I336iIk7h2MmvHdJGCazxwueV8EIjbz+FyHdP00TDTJBnnLY9JtnkelR5UuXUWSZJFfhpP5VDTJDnl5vyza0sP+j9MeZ3t39und+V1lmnOfzuri7tyWnpYrfo0iacScYx3JciUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkxJcaUGFNiTIkZ+UVRiqcS02acTbp02WRcekzd2qwzyzzzzPJaekzdmskpD/lOcpddbkvPqVR/vPgSc39+NFAzec99njLKR3Z5OZbeU7E2yxyyz1cOWZUeU7dfXF0jw01p2pMAAAAASUVORK5CYII="
        />
      </svg>
      <svg
        class={cxs({
          position: "absolute",
          zIndex: 2,
          top: "135px",
          left: "235px",
          pointerEvents: "none",
          transition: "all 450ms ease-in-out",
          width: paragraph === "eyes" ? "100%" : 0,
        })}
        xmlns="http://www.w3.org/2000/svg"
        width="225"
        height="7"
      >
        <image
          width="225"
          height="7"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAHCAQAAABUp+JuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBgILEQdz+XRQAAAAoElEQVRIx+3VoU7DUBiG4ecsTT2gkK2YWG+JKTLbqeIww62GyS0NZveFXKbOBcwU0ywE1WBacR51PveaPycUfvuWzF0JudaL4KxZyB1E0UE+dVwy2l7t0YPabuHDUqWytJu6KxltfX9tQhGtXPHsMnVX8g8xE/SgFz2lv3D+Svi0HWaXOfnyKnPUTR2XjPYmWOPsPRS5dhiNW7rC+Sv/7B8OUR1HgDV5nQAAAABJRU5ErkJggg=="
        />
      </svg>
      <svg
        class={cxs({
          position: "absolute",
          zIndex: 2,
          bottom: "-45px",
          left: "171px",
          pointerEvents: "none",
          transition: "all 450ms ease-in-out",
          width: paragraph === "tie" ? "100%" : 0,
        })}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="310"
        height="61"
      >
        <image
          width="310"
          height="61"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAA9CAQAAACNBY1VAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBgILDTFaNLyUAAABZUlEQVR42u3dIW/CUBhG4dOG4MfUJCTDsL+EmmdqTGEmmRlzS+b4R4RMEewU2MnOIEBNLH1v0p1Htab5xMm9t+pWDVI7RgB9XpgCax57pQdSxy2ZATDju3JlU1tGAAcGp9djXXog/R9n2+io9CzqojUPp6cPz2xq15yKKVe8sTg7s7myqTUN1cU2KrVnD/iDoBhjU4yxKcbYFGNsijE2xRibYoxNMcamGGNTjLEpxtgUY2yKMTbFGJtijE0xxqYYY1OMsSnG2BRjbIoxNsUYm2KMTTHGphhjU4yxKcbYFGNsijE2xRibYoxNMcamGGNTjLEpxtgUY2yKMTbFGJtijE0xxqYYY1OMsSnG2BRjbIrpefGjUlzZFFPTZ8WRIyv6pYdRt9UsGTNhwpjn0sOo26rhgTu+gBu2XJceRx3V7C+u7W4Y0Pzhc9IvquErt9zT450tT/vS86jDaubs+GTDjkXpYdRtP1ebJBLveNuwAAAAAElFTkSuQmCC"
        />
      </svg>
      <svg
        class={cxs({
          position: "absolute",
          zIndex: 2,
          bottom: "-45px",
          left: "-184px",
          pointerEvents: "none",
          transition: "all 450ms ease-in-out",
          width: paragraph === "mouth" ? "100%" : 0,
        })}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="337"
        height="140"
      >
        <image
          width="337"
          height="140"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAACMCAQAAABvqFKMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBgILDiQcxAu8AAACL0lEQVR42u3WoW5VWQBG4f82N30AUEiaVMErofA4CAYzkjGDnGRc32hCRjVYFFhkMU0FJWPPEt+ndo76xco++3Q3KLnatsv9uVfbbvb24uhB8Bsfd70Xe7Hr/XFyi9JytW3f9nJftz3b5/P9Z6VSdLfd36JXdzsdvQYe/LXrvd55f++ztyhF73a7//bvbvfBLUrc+egB8DtfHk5+9MRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4iRKnESJkyhxEiVOosRJlDiJEidR4s5XRy+A/+UWJe5il/u079s+7fLoMfDYeR/3Ztv2Zj/2/ug58KvT8297cn/+vqdfjt4Dv/AWJe5iNw/nf44eA4+d926nvdp2sw9Hj4HHfgLfRiNgxVDq6wAAAABJRU5ErkJggg=="
        />
      </svg>
      <img
        src={require("assets/images/content/shadows/trump.svg")} // * 0.78
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
        src={require("assets/images/content/trumpBody.png")}
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
