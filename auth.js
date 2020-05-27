
const jwt = require('jsonwebtoken');
const {Users,UserTypes} = require('./data-objects');
const jwtKey = "Aion";
const jwtExpirySeconds = 1800 // 1800 is half hour in seconds  //3600 is an hour in seconds //

exports.authorization = async (req, res, next)=>{
    if(req.url === '/Users/Login' || req.url === '/Users/Logout'){
      next();
    }
    else{
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (token === null) return res.sendStatus(401); // if there isn't any token
  
  
      const user = await Users.findOne({ where:{Token : token } , include:[ {model : UserTypes} ]   });
      if (user === null) return res.sendStatus(401); // if there isn't any user with that token
  
      jwt.verify(token, jwtKey, (err) => {
        console.log(err)
        if (err) return res.sendStatus(403);
        next(); // pass the execution off to whatever request the client intended
      });
    }
  
  };








  exports.loginUser =async ({Email , Password})=>{

    try {
        let user = await Users.findOne({ where:{Email : Email , Password:Password} , include:[ {model : UserTypes} ]   });
        if(user)
        {
            const token = jwt.sign({ userId:user.ID }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            });
            user.Token = token;
            user.TokenExpiresIn = jwtExpirySeconds;
            user = await user.save();
            return user;
        }

        return null;
        
    } catch (error) {
        return null;
    }
    
};


exports.logoutUser =async (userId)=>{

    try {
        let user = await Users.findOne({ where:{ID : userId } , include:[ {model : UserTypes} ]   });
        if(user)
        {
            user.Token = "";
            user.TokenExpiresIn = 0;
            user = await user.save();
            return user;
        }

        return null;
        
    } catch (error) {
        return null;
    }
    
};