import { Box } from '@gr4vy/poutine-react'
import { useRef, useState, type PropsWithChildren, type ReactNode } from 'react'

export interface AccordionProps extends PropsWithChildren {
  header: ReactNode | string
}

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
)

const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
)

export const Accordion = ({ children, header }: AccordionProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    if (contentRef?.current?.style?.maxHeight !== '0px') {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }

  return (
    <Box>
      <button
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        {header}
        <span>{collapsed ? <ChevronDown /> : <ChevronUp />}</span>
      </button>
      <Box
        ref={contentRef}
        className={`overflow-hidden ${!collapsed ? 'mt-4' : ''}`}
        style={{
          maxHeight: collapsed ? '0' : `${contentRef?.current?.scrollHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
