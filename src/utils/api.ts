import { env } from './env'

export interface CheckoutSession {
  id: string
}

export interface Transaction {
  id: string
}

export interface TransactionError {
  status: string
  message: string
}

export type PostBody = Record<string, unknown>

export const baseUrl = `https://api${env.VITE_GR4VY_ENVIRONMENT === 'sandbox' ? '.sandbox' : ''}.${env.VITE_GR4VY_ID}.gr4vy.app`

export const post = (url: string, body: PostBody) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.VITE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

export const createCheckoutSession = async (body: PostBody) => {
  const response = await post(`${baseUrl}/checkout/sessions`, body)
  if (!response.ok) return null
  return response.json() as Promise<CheckoutSession>
}

export const createTransaction = async (body: PostBody) => {
  const response = await post(`${baseUrl}/transactions`, body)
  return response.json() as Promise<Transaction | TransactionError>
}
