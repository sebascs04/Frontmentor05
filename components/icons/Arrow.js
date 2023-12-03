import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Arrow = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={20} {...props}>
    <Path
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      d="m1 1 8.836 8.836L1 18.671"
    />
  </Svg>
)
export default Arrow
