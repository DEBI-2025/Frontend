export default  function Validation(values){
    let errors ={};
    if(!values.firstName.trim()){
        errors.firstName ="First Name is required";
    }
    if(!values.lastName.trim()){
        errors.lastName ="Last Name is required";
    }
    if(!values.email.trim()){
        errors.email ="Email is required";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
        errors.email = "Invalid Email";

    }
    if(!values.dateOfBirth.trim()){
        errors.dateOfBirth ="date of birth is required";
    }
    if(!values.phone.trim()){
        errors.phone ="Phone is required";
    }else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Phone number must be 11 digits";
      }
      if(!values.password.trim()){
        errors.password =" password is required";
    }else if (values.password.length <6){
        errors.password ="Password must be at least 6 characters long";
    }
    if(!values.confirmPassword.trim()){
        errors.confirmPassword =" confirm Password is required";
    }else if (values.password !== values .confirmPassword){
        errors.confirmPassword ="Passwords do not match";
    }
    return errors

} 