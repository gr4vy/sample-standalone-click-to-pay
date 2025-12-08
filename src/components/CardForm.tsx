import { Grid, GridItem, Stack, type BoxProps } from '@gr4vy/poutine-react'
import { CardForm as SecureFieldsCardForm } from '@gr4vy/secure-fields-react'
import type { PropsWithChildren } from 'react'

export const FieldGroup = ({
  children,
  gap = 8,
  ...rest
}: PropsWithChildren<{ gap?: BoxProps['gap'] } & Record<string, unknown>>) => {
  return (
    <GridItem {...rest}>
      <Stack gap={gap}>{children}</Stack>
    </GridItem>
  )
}

export const CardForm = ({
  children,
  hidden,
}: PropsWithChildren<{ hidden?: boolean }>) => {
  if (hidden) return null

  return (
    <SecureFieldsCardForm>
      <Grid rowGap={12} columnGap={12}>
        {children}
      </Grid>
    </SecureFieldsCardForm>
  )
}

CardForm.FieldGroup = FieldGroup
