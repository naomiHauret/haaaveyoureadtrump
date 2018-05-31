import { h } from "hyperapp"

export default (props) => {
  const { sliceWrapperStyle, sliceTextStyle, img, name, data, isSelectSliceView, toggleSlice } = props
  return <div class={sliceWrapperStyle} onclick={() => toggleSlice({ sliceName: name })}>
      <img src={img} />
      {isSelectSliceView === false && <div class={sliceTextStyle}>
          <span>{name}</span>
        </div>}
    </div>
}
