import { SVGProps } from 'react'

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" height={18} width={18} {...props}>
    <path
      fillRule="evenodd"
      d="M11.536 3.464a5 5 0 0 1 0 7.072L8 14.07l-3.536-3.535a5 5 0 1 1 7.072-7.072v.001zm1.06 8.132a6.5 6.5 0 1 0-9.192 0l3.535 3.536a1.5 1.5 0 0 0 2.122 0l3.535-3.536zM8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
  </svg>
)

export const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    height={18}
    width={18}
    data-view-component="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z"
    />
  </svg>
)

export const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    height={18}
    width={18}
    data-view-component="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.75 2A1.75 1.75 0 0 0 0 3.75v.736a.75.75 0 0 0 0 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-8.5A1.75 1.75 0 0 0 14.25 2H1.75zM14.5 4.07v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809z"
    />
  </svg>
)

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="stars"
    height={16}
    width={16}
    data-view-component="true"
    fill="#616a73"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"
    />
  </svg>
)

export const ForkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="forks"
    height={16}
    width={16}
    data-view-component="true"
    fill="#616a73"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
    />
  </svg>
)
