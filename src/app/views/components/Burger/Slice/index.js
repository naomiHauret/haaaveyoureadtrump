import { h } from "hyperapp"
import cxs from "cxs"

export default (props) => {
  const { sliceWrapperStyle, sliceTextStyle, img, name, data, isSelectSliceView, toggleSlice, isActive } = props
  return (
    <div class={sliceWrapperStyle} onclick={() => toggleSlice({ sliceName: name })}>
      <img
        src={img}
        class={cxs({
          opacity: isSelectSliceView && isActive ? "1 !important" : isSelectSliceView && !isActive ? 0.5 : 1,
        })}
      />
      {isSelectSliceView === false && (
        <div class={sliceTextStyle}>
          <span>{name}</span>
        </div>
      )}
    </div>
  )
}
