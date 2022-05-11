const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
  console.log('Entering backend function')
  const { items } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app'

  const transformedItems = items.map(item => 
    {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            images: [item.image],
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        description: item.description,
        quantity: item.quantity,
      }
    }
  )

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [...transformedItems],
    mode: 'payment',
    // success_url: redirectURL + '?status=success',
    // cancel_url: redirectURL + '?status=cancel',
    success_url: `${req.headers.origin}?status=success`,
    cancel_url: `${req.headers.origin}?status=cancel`,
    metadata: {
      // images: item.image,
    },
  })
  console.log('Exiting backend function')
  res.json({ id: session.id })
}

export default CreateStripeSession;