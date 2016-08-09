app.controller('PayPal', ['$scope', function($scope) {

  console.log('in PayPal.js');

  var request = {
     method: 'POST',
     url:  ApiEndpoint + '/paypal/set-express-checkcout',
     headers: {
       'Content-Type': 'application/json',
     },
     data: {
      email: email,
      discountCode: discountCode,
      products: products,
      successUrl: successUrl, // successUrl is something like - http://www.mysite.com/#/paypal/execute-charge
      cancelUrl: cancelUrl,
     }
};
 
return $http(request);  

/**
 * Paypal checkout. Reacts on /paypal/set-express-checkout
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function paypalCheckout(orderData, req, res) {
    var cancelUrl = req.body.cancelUrl;
    var successUrl = req.body.successUrl;
 
    var paypal = PayPal.create(GLOBAL.config.paypal.apiUsername, GLOBAL.config.paypal.apiPassword, GLOBAL.config.paypal.signature, GLOBAL.config.paypal.sandbox);
    paypal.setPayOptions(GLOBAL.config.paypal.brandName, null, GLOBAL.config.paypal.logoUrl);
 
    var paypalItems = _.map(orderData.products, function(item) {
        return {
            name: item.name,
            description: item.description,
            quantity: item.userOptions.quantity,
            amount: item.price,
        };
    });
 
    paypal.setProducts(paypalItems);
 
    paypal.setExpressCheckoutPayment(
        orderData.email, 
        orderData.orderId, 
        orderData.totalDiscountedPrice, 
        '', 
        'USD', 
        successUrl, 
        cancelUrl, 
        false,
        function(err, data) {
            if (err) {
                logger.error('paypal seting express checkout payment failed.', err);
                res.status(500).send('Error setting paypal payment');
                return;
            }
 
            GLOBAL.dbConnection.query('INSERT INTO paypal_order_data (token, order_data) VALUES (?, ?)', [data.token, JSON.stringify(orderData)], function(err) {
                if (err) {
                    logger.error('Storing paypal_order_data for orderId: %s with token: %s', orderData.orderId, data.token);
                    return res.status(500).send('Error setting paypal payment. Failed storing order data.');
                }
 
                res.send({ redirectUrl: redirectUrl });
            });
    });
}

var query = $location.search();
 
if (!query.token) {
    $scope.errorMessage = 'This call is not made from PayPal. Report this issue to support.';
} else {
    DataProvider.paypalSuccess(query.token).then(function(response) { // This one will call getExpressCheckoutDetails on server and perform actual charge
        if (response.status === 200) {
            // Successful checkout, go to order success.
            $location.path('/order-processed/' + response.data.orderId);
        } else {
            $scope.errorMessage = 'Error executing paypal.' + query.token;
        }
    }).catch(function() {
        $scope.errorMessage = 'Error performing paypalSuccess request' + query.token;
    }); 
} 

}]);