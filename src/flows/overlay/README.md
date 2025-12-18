# Click to Pay Overlay UX Flow

You can choose to render Click to Pay as a payment method within an overlay.

![Action Sheet](preview.png?raw=true)

```
// main App
<SecureFields
  gr4vyId={env.VITE_GR4VY_ID}
  environment={env.VITE_GR4VY_ENVIRONMENT}
  sessionId={sessionId}
  ...
>
  <Form>
</SecureFields>

// Form
const { secureFields } = useSecureFields()
const handleSubmit = () => secureFields.submit()

<form>
  <div id="payment-methods">
    <div>
      <dialog open>
        <ClickToPay
          srcDpaId={env.VITE_SRC_DPA_ID}
          dpaName={env.VITE_DPA_NAME}
          dpaLocale="en_AU"
          cardBrands={['mastercard', 'visa', 'amex']}
          consentCheckbox="#click-to-pay-consent-checkbox"
          rememberMeCheckbox="#click-to-pay-remember-me-checkbox"
          learnMoreLink="#click-to-pay-learn-more-link"
          email={user?.email}
          authenticate={{ consumer: true, checkout: true }}
        />
        <CardForm>
          <label htmlFor="cc-number">Card Number</label>
          <CardNumber />
          <label htmlFor="cc-expiry-date">Expiry Date</label>
          <ExpiryDate />
          <label htmlFor="cc-security-code">Security Code</label>
          <SecurityCode />

          <input type="checkbox" id="click-to-pay-consent-checkbox"/>
          <label htmlFor="click-to-pay-consent-checkbox">
            Save my information with Mastercard
            <a href="javascript:void(0)" id="click-to-pay-learn-more-link">
              Click to Pay
            </a>
            for fast, secure checkout
          </label>

          <input type="checkbox" id="click-to-pay-remember-me-checkbox" />
          <p>Remember me in this browser</p>
        </CardForm>
      </dialog>
    </div>
    <!-- other payment methods -->
    <input type="submit" value="Submit">
  </div>
</form>
```

See the full code [here](sample-standalone-click-to-pay/blob/main/src/flows/overlay/Overlay.tsx).
