const mongoose=require('mongoose');
const {isEmail}=require('validator');
const bcrypt=require('bcrypt');


const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,'Please enter first name '],
        minlength:[3,'Name of the user should be longer than 3 characters']
    },
    lastName:{
        type:String,
        required:[true,'Please enter  last name'],
        minlength:[3,'Name of the user should be longer than 3 characters']
    }
    ,
    email:{
    type:String,
    required:[true,'Please enter a valid email address'],
    unique:true,
    lowercase:true,
    validate:[isEmail,'Please enter a valid email address']
    }
    ,
    password:{
        type:String,
        required:[true,'Please enter a valid password'],
        minlength:[8,'Password must be at least 8 characters']
    },
    
    username:{
        type:String,
        unique:true,
        required:[true,'Please enter a username'],
        minlength:[3,'Username of the user should be longer than 3 characters']
    },
    history:[]

});


userSchema.statics.login = async function (username, password) {
    try {
      const user = await this.findOne({ username });
      
      if (user) {
        const auth = await bcrypt.compare(password, user.password);
  
        if (auth) {
          return user;
        }
        throw new Error('Incorrect password');
      }
      throw new Error('Incorrect username');
    } catch (error) {
      throw new Error(error.message);
    }
  };

const User=mongoose.model('User',userSchema);

module.exports = User;
