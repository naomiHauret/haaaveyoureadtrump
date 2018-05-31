import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import bacon from "assets/images/content/burger/bacon.svg"
import cheddar from "assets/images/content/burger/cheddar.svg"
import drapeau from "assets/images/content/burger/drapeau.svg"
import galette from "assets/images/content/burger/galette.svg"
import ketchup from "assets/images/content/burger/ketchup.svg"
import mayonnaise from "assets/images/content/burger/mayonnaise.svg"
import oignons from "assets/images/content/burger/oignons.svg"
import painBottom from "assets/images/content/burger/pain_bottom.svg"
import painTop from "assets/images/content/burger/pain_top.svg"
import salade from "assets/images/content/burger/salade.svg"
import steak from "assets/images/content/burger/steak.svg"
import tomates from "assets/images/content/burger/tomates.svg"

export default () => (
  <div
    class={cxs({
      textAlign: "center",
      "> div": {
        transition: "all 750ms ease-in-out",
        position: "relative",
      },
      ":hover": {
        "> div": {
          opacity: 0.5,
          cursor: "pointer",
        },
      },
    })}
  >
    <div
      class={cxs({
        textAlign: "center",
        transform: "translateX(10%)",
      })}
    >
      <img src={drapeau} />
    </div>
    <div
      class={cxs({
        zIndex: 15,
        marginTop: "-15px",
      })}
    >
      <img src={painTop} />
    </div>
    <div
      class={cxs({
        marginTop: "-30px",
        zIndex: 10,
      })}
    >
      <img src={tomates} />
    </div>
    <div
      class={cxs({
        marginTop: "-90px",
        zIndex: 11,
      })}
    >
      <img src={salade} />
    </div>
    <div
      class={cxs({
        marginTop: "-40px",
        zIndex: 9,
      })}
    >
      <img src={oignons} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        zIndex: 8,
      })}
    >
      <img src={bacon} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        zIndex: 8,
      })}
    >
      <img src={mayonnaise} />
    </div>
    <div
      class={cxs({
        marginTop: "-50px",
        zIndex: 7,
      })}
    >
      <img src={ketchup} />
    </div>
    <div
      class={cxs({
        marginTop: "-60px",
        zIndex: 6,
      })}
    >
      <img src={steak} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        zIndex: 5,
      })}
    >
      <img src={cheddar} />
    </div>
    <div
      class={cxs({
        marginTop: "-65px",
        zIndex: 4,
      })}
    >
      <img src={galette} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        zIndex: 3,
        transform: "translateX(0.5%)",
      })}
    >
      <img src={steak} />
    </div>
    <div
      class={cxs({
        marginTop: "-28px",
        zIndex: 2,
        transform: "translateX(4.5%)",
      })}
    >
      <img src={tomates} />
    </div>
    <div
      class={cxs({
        transform: "translateX(-3.5%)",
        marginTop: "-70px",
        zIndex: 1,
      })}
    >
      <img src={salade} />
    </div>
    <div
      class={cxs({
        marginTop: "-75px",
        zIndex: 0,
      })}
    >
      <img src={painBottom} />
    </div>
  </div>
)
