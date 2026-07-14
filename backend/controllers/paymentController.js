const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const dotenv = require("dotenv");//helps to access the env variables from config.env file
dotenv.config({ path: "./config/config.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log("KEY", process.env.STRIPE_SECRET_KEY);
//In frontend cart- user is adding - sends the item to the backend- 
//processPayment is created to create a stripe session and send the session url to the frontend-
//stripe checkout session is created- stripe generates the url-then the backend sends the url to the frontend
//frontend redirects user to the stripe page and the user pays there

//processPayment is called when the user clicks on the pay button in the frontend cart page
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);//cart item sent by the user from the frontend

  //stripe checkout session
  const session = await stripe.checkout.sessions.create({
    customer_email: req.user.email,
    phone_number_collection: {
      enabled: true,
    },

    //placeholder
    line_items: req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.foodItem.name,
          images: [item.foodItem.images[0].url],
        },
        // Set the price in the smallest currency unit (e.g., paise for INR)
        //Rs 100 becomes 10000 paise (stored in the database as 10000)
        unit_amount: item.foodItem.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["US", "IN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          display_name: "Delivery Charges",
          type: "fixed_amount",
          fixed_amount: {
            amount: 5500, // Amount in paise (e.g., 5500 = 55 INR)
            currency: "inr",
          },
          delivery_estimate: {
            minimum: {
              unit: "hour",
              value: 1,
            },
            maximum: {
              unit: "hour",
              value: 3,
            },
          },
        },
      },
    ],
    // success_url and cancel_url are the urls to which the user will be redirected after the payment is successful or cancelled
    success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL}/cart`,
  });
  //response is sent to the frontend with the session url-frontend redirects user to the stripe page
  res.status(200).json({ url: session.url });
});

// exports.paymentDetails = catchAsyncErrors(async (req, res, next) => {
//   const session = await stripe.checkout.sessions.retrieve(
//     "cs_test_b1wjqczdc5wwaNj5FjvxipLWeKZIvZQvsbC2OjfC5FEZw5vJ8aJbdMPRYC",
//     {
//       expand: ["customer"],
//     }
//   );
// console.log(session);
//   res.json({
//     session,
//   });
// });

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY
  });
});
