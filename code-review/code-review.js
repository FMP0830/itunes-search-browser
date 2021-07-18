/*

Changes

1 - Added module.exports to export the function
2 - Changed var declarations for invitationBody, shopId and authUrl from var to const
3 - Turned function declarations into arrow functions
4 - Changed Mongoose findByIdAndUpdate methods to async await to ease readability
5 - Split the if else statements into single if blocks for independent error checking 
6 - Added an extra if validation in the shop update to check if invitation was previously processed and invitation was sent by some error
7 - Added two variables for boolean validation to perform the extra check
8 - added an extra if condition to send error message if user creation returned error

*/


module.exports.inviteUser = (req, res) => {
	
  const invitationBody = req.body;
	const { shopId } = req.params;
	const authUrl = 'https://url.to.auth.system.com/invitation';

	superagent
		.post(authUrl)
		.send(invitationBody)
		.end( async (err, invitationResponse) => {

			if (invitationResponse.status === 201) {

        await User.findOneAndUpdate(
					{
						authId: invitationResponse.body.authId
					},
					{
						authId: invitationResponse.body.authId,
						email: invitationBody.email
					},
					{
						upsert: true,
						new: true
					}, (err, createdUser) => {
        
            const shop = await Shop.findById(shopId)

						const invitationAlreadySent = shop.invitations.indexOf(invitationResponse.body.invitationId)
						const userAlreadyRegistered = shop.users.indexOf(createdUser._id !== -1) 

            if(err || !shop) {
              return res
							.status(404)
							.send(err || { message: 'No shop found' })
            } 
						
						if (invitationAlreadySent || userAlreadyRegistered) {
							return res
							.status(404)
							.send(err || { message: 'This invitation has already been processed' })
						} 
						
						shop.invitations.push(invitationResponse.body.invitationId)
             shop.users.push(createdUser)
						await Shop.findByIdAndUpdate(shopId, shop)

          })
			} 
			
			if (invitationResponse.status === 200) {
				res.status(400).json({
					error: true,
					message: 'User already invited to this shop'
				});
				return;
			}

			if(err) {
				res.status(422).send(err || {
					message: 'There was an error processing this request'
				});
			}

			res.json(invitationResponse);
		});
};


/*

--- Original code ---

exports.inviteUser = function(req, res) {
  var invitationBody = req.body;
  var shopId = req.params.shopId;
  var authUrl = "https://url.to.auth.system.com/invitation";

  superagent
    .post(authUrl)
    .send(invitationBody)
    .end(function(err, invitationResponse) {
      if (invitationResponse.status === 201) {
        User.findOneAndUpdate({
          authId: invitationResponse.body.authId
        }, {
          authId: invitationResponse.body.authId,
          email: invitationBody.email
        }, {
          upsert: true,
          new: true
        }, function(err, createdUser) {
          Shop.findById(shopId).exec(function(err, shop) {
            if (err || !shop) {
              return res.status(500).send(err || { message: 'No shop found' });
            }
            if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
              shop.invitations.push(invitationResponse.body.invitationId);
            }
            if (shop.users.indexOf(createdUser._id) === -1) {
              shop.users.push(createdUser);
            }
            shop.save();
          });
        });
      } else if (invitationResponse.status === 200) {
        res.status(400).json({
          error: true,
          message: 'User already invited to this shop'
        });
        return;
      }
      res.json(invitationResponse);
    });
};

*/
