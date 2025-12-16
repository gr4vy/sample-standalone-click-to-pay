import { Icon } from '@gr4vy/poutine-react'
import {
  useEffect,
  useRef,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'

export const Dialog = ({
  open = false,
  onClose,
  children,
}: PropsWithChildren<{ open?: boolean; onClose?: () => void }>) => {
  const ref = useRef<HTMLDialogElement>(null)

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClose?.()
    ref.current?.close()
  }

  useEffect(() => {
    if (open) {
      ref.current?.show()
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className="top-[53px] h-[calc(100%-64px-53px)] w-full max-w-lg bg-black/65 p-4"
    >
      <div className="relative h-full overflow-y-auto bg-white p-4">
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
