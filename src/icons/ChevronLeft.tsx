

import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path stroke="#42567A" strokeWidth={2} d="M8.5.75 2.25 7l6.25 6.25" />
  </svg>
)
const ChevronLeft = memo(SvgComponent)
export default ChevronLeft
