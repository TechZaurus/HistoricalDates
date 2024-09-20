import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path stroke="#3877EE" strokeWidth={2} d="m1 1 5 5-5 5" />
  </svg>
)
const ChevronLeftAlt = memo(SvgComponent);
export default ChevronLeftAlt
