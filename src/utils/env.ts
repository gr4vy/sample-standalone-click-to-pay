const getEnvVar = (name: string) =>
  import.meta && import.meta.env && (import.meta.env[name] as string)

export const env = {
  GR4VY_PRIVATE_KEY: getEnvVar('GR4VY_PRIVATE_KEY'),
  VITE_GR4VY_ENVIRONMENT: getEnvVar('VITE_GR4VY_ENVIRONMENT') || 'sandbox',
  VITE_GR4VY_ID: getEnvVar('VITE_GR4VY_ID') || 'dev',
  VITE_TOKEN: getEnvVar('VITE_TOKEN'),
  VITE_SRC_DPA_ID: getEnvVar('VITE_SRC_DPA_ID'),
  VITE_DPA_NAME: getEnvVar('VITE_DPA_NAME'),
}
