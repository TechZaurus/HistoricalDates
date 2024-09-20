
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path stroke="#42567A" strokeWidth={2} d="M1.5.75 7.75 7 1.5 13.25" />
  </svg>
)
const ChevronRight = memo(SvgComponent)
export default ChevronRight
