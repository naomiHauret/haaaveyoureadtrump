import addSound from "assets/sound/push.mp3"
import removeSound from "assets/sound/pop.mp3"
let playAdd = new Audio(addSound)
let playRemove = new Audio(removeSound)
playRemove.volume = 0.05
playAdd.volume = 0.05
export default {
  toggleUnfoldBurger: ({ value }) => (state) => ({
    unfoldBurger: value,
  }),
  toggleGraph: () => (state) => ({
    showGraph: !state.showGraph,
  }),
  toggleSlice: ({ sliceName }) => (state) => {
    let previousBurger = state.currentBurger
    let isSliceInBurger = previousBurger.indexOf(sliceName)

    let newBurger =
      isSliceInBurger > -1
        ? [...previousBurger.slice(0, isSliceInBurger), ...previousBurger.slice(isSliceInBurger + 1)]
        : [...previousBurger, sliceName]

    isSliceInBurger > -1 ? playRemove.play() : playAdd.play()
    return { currentBurger: newBurger, addedSlice: sliceName }
  },
}
