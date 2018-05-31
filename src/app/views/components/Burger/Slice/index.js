import { h } from "hyperapp"

export default (props) => {
  const { sliceWrapperStyle, sliceTextStyle, img, name, data, isPreview, state, actions } = props
  return (
    <div class={sliceWrapperStyle} onclick={() => actions.toggleSlice({ sliceName: name })}>
      <img src={img} />
      {isPreview === false && (
        <div class={sliceTextStyle}>
          <span>{name}</span>
        </div>
      )}
    </div>
  )
}
