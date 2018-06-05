import { h } from "hyperapp"
import cxs from "cxs"

export default (props) => {
  const {
    sliceWrapperStyle,
    sliceTextStyle,
    img,
    name,
    data,
    isSelectSliceView,
    toggleSlice,
    isActive,
    isLastAddedSlice,
    isCustom,
  } = props
  return (
    <div class={sliceWrapperStyle} onclick={() => toggleSlice({ sliceName: name })}>
      <img
        src={img}
        title={isSelectSliceView === true ? `${name} ${isActive === true ? "✓" : ""}` : ""}
        class={cxs({
          opacity: isSelectSliceView && isActive ? "1 !important" : isSelectSliceView && !isActive ? 0.5 : 1,
          ":hover ~ div > svg": {
            width: "80% !important",
          },
        })}
      />
      {isSelectSliceView === false && (
        <div class={sliceTextStyle} style={{ opacity: isCustom === true && isLastAddedSlice === true ? 1 : 0 }}>
          <svg
            class={cxs({
              position: "absolute",
              left: 0,
              transform: "translateX(calc(-100% - 20px))",
              top: "7px",
              width: isCustom === true && isLastAddedSlice === true ? "80%" : 0,
              transition: "125ms width ease-in-out",
              transitionDelay: "200ms",
            })}
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="173"
            height="7"
          >
            <image
              width="173"
              height="7"
              href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAHCAQAAADQIQVAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBgILBQ29gkobAAAAoklEQVRIx+3WIQ7CQBCF4X+bZg8AqnI3qaFcCUwPAAYcCtVgWonujQjB0KAxzAEwxTQtIMc0afZT8zLJZsQTa5zlxAqo2fF+EGj5vxxxJCUjI6UY+7gJsFQIQoU1TljwBBKuzENr9TxAyaaLZYyh7bet17wZDKSf1sYVLMmJOXNnG1qr5wFezLooEQcablxo2I993ATUw2Tczya0Vs8DfP23PsZLIM/YYem7AAAAAElFTkSuQmCC"
            />
          </svg>
          <span>{name}</span>
        </div>
      )}
    </div>
  )
}
