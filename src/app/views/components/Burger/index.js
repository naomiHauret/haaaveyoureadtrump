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
        transform: "rotate(-3deg) translateX(-5%)",
      })}
    >
      <img src={drapeau} />
    </div>
    <div
      class={cxs({
        zIndex: 6,
        marginTop: "-15px",
      })}
    >
      <img src={painTop} />
    </div>
    <div
      class={cxs({
        marginTop: "-30px",
        transform: "translateX(8.5%)",
        zIndex: 4,
      })}
    >
      <img src={tomates} />
    </div>
    <div
      class={cxs({
        marginTop: "-90px",
        transform: "translateX(5%)",
        zIndex: 5,
      })}
    >
      <img src={salade} />
    </div>
    <div
      class={cxs({
        marginTop: "-40px",
        transform: "translateX(5%)",
        zIndex: 3,
      })}
    >
      <img src={oignons} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        zIndex: 2,
        transform: "translateX(2.5%)",
      })}
    >
      <img src={bacon} />
    </div>
    <div
      class={cxs({
        marginTop: "-45px",
        transform: "translateX(6%)",
        zIndex: 2,
      })}
    >
      <img src={mayonnaise} />
    </div>
    <div
      class={cxs({
        marginTop: "-50px",
        zIndex: 1,
        transform: "translateX(2.5%)",
      })}
    >
      <img src={ketchup} />
    </div>
    <div
      class={cxs({
        marginTop: "-60px",
      })}
    >
      <img src={steak} />
    </div>
    <div>
      <img src={cheddar} />
    </div>
    <div>
      <img src={galette} />
    </div>
    <div>
      <img src={steak} />
    </div>
    <div>
      <img src={tomates} />
    </div>
    <div>
      <img src={salade} />
    </div>
    <div>
      <img src={painBottom} />
    </div>
  </div>
)
