import { Alert } from '@gr4vy/poutine-react'

export const ErrorAlert = ({ error }: { error?: Error }) => {
  if (!error) return null

  return (
    <Alert gap={16} variant="negative" paddingX={16} paddingY={8}>
      <Alert.Text>Error: {error.message}</Alert.Text>
    </Alert>
  )
}
