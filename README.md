# Sample Standalone Click to Pay

A sample application to demonstrate how to integrate Click to Pay using Gr4vy's Secure Fields.

Run the app and see how Click to Pay is integrated:

- [Inline](sample-standalone-click-to-pay/blob/main/src/flows/inline/README.md)
- [Overlay](sample-standalone-click-to-pay/blob/main/src/flows/overlay/README.md)
- [Action Sheet](sample-standalone-click-to-pay/blob/main/src/flows/action-sheet/README.md)

## Installation

```
yarn install
```

## Configuration

Copy the `.env.example` as `.env` and update accordingly.

In development mode, you'll need to generate a private key on the Gr4vy portal, which is going to be used to create a valid token that will allow talking to the Gr4vy's API. You can find more information on how to generate one https://docs.gr4vy.com/guides/payments/secure-fields/quick-start/key.

Once you have the private key, base64 encode it and copy the resulting string as value for the `GR4VY_PRIVATE_KEY` environment variable:

`GR4VY_PRIVATE_KEY=LS0tLS1...`

In production, you can just generate the token on the server side and set it as `VITE_TOKEN` value.

As for the rest of the variables:

- `VITE_GR4VY_ENVIRONMENT` is your Gr4vy environment (`sandbox` or `production`)
- `VITE_GR4VY_ID` is your Gr4vy instance ID
- `VITE_SRC_DPA_ID` is your Click to Pay digital payment application ID you can find in the Mastercard's Unified Checkout Solutions dashboard
- `VITE_DPA_NAME` is your Click to Pay digital payment application name you can find in the Mastercard's Unified Checkout Solutions dashboard

## Usage

Run the app in development mode:

```
yarn dev
```

Or build and serve it:

```
yarn build
yarn preview
```
