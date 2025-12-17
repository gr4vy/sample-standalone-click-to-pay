import { Icon } from '@gr4vy/poutine-react'
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'

export const Sheet = ({
  open = false,
  onClose,
  children,
}: PropsWithChildren<{
  open?: boolean
  onClose?: () => void
}>) => {
  const ref = useRef<HTMLDialogElement>(null)
  const [isClosing, setIsClosing] = useState(false)

  const dialogClass = [
    'top-[53px] h-[calc(100%-64px-53px)] w-full max-w-lg overflow-hidden bg-black/65 px-0 pb-0',
    isClosing
      ? 'animate-[fadeOut_300ms_ease-out_150ms_forwards]'
      : 'animate-[fadeIn_300ms_ease-out]',
  ].join(' ')

  const contentClass = [
    'overflow-y-auto bg-white p-4 absolute bottom-0 h-[97%] w-full rounded-t-4xl rounded-r-4xl rounded-b-none',
    isClosing
      ? 'animate-[slideDown_300ms_ease-out_forwards]'
      : 'opacity-0 animate-[slideUp_300ms_ease-out_150ms_both,fadeIn_0s_ease-out_150ms_forwards]',
  ].join(' ')

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClosing(true)
  }

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose?.()
      ref.current?.close()
      setIsClosing(false)
    }
  }

  useEffect(() => {
    if (open) {
      ref.current?.show()
      setIsClosing(false)
    }
  }, [open])

  return (
    <dialog ref={ref} className={dialogClass}>
      <div className={contentClass} onAnimationEnd={handleAnimationEnd}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-7 cursor-pointer"
        >
          <Icon name="close-sm" />
        </button>
        {children}
      </div>
    </dialog>
  )
}
