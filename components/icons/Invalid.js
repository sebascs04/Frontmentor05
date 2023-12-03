import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
const Invalid = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={12} cy={12} r={12} fill="#F96464" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
      />
    </G>
  </Svg>
)
export default Invalid
