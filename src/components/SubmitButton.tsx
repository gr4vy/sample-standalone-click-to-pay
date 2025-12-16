import { Button, type ButtonProps } from '@gr4vy/poutine-react'

export const SubmitButton = (props: Omit<ButtonProps, 'ref'>) => {
  return (
    <Button type="submit" {...props}>
      Submit
    </Button>
  )
}
