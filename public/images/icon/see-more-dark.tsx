import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    fill="#fff"
    stroke="#fff"
    transform="rotate(90)"
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z" />
    <path d="M18 27a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM32 27a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM46 27a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
  </svg>
)
export default SvgComponent
