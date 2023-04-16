import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link} from 'react-router-dom';
import Social from '../Social/Social';
import {AuthContext} from '../../Contexts/AuthProvider'



const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
 const [signUpError, setSignUpError] = useState('');
  const { createUser, updateUser} = useContext(AuthContext);
  
const [createdUserEmail, setCreatedUserEmail] = useState('');
//    const [token] = useToken(createdUserEmail)
//   const navigate = useNavigate();

//   if (token) {
//     navigate('/');

//   }

  const handleSignUp = (data) => {
    setSignUpError('');
    console.log(data.name)

    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;

        console.log(user)
        toast.success('Successfully created an Account')

        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            // saveUser(data?.name, data?.email);
            console.log(data?.name, data?.email);
          })

          .catch(err => console.log(err))

      })
      .catch(error => {
        console.log(error)
        setSignUpError(error.message)
      });
    console.log(data.name)
  }
//   const saveUser = (name, email) => {
//     const user = { name, email };

//     fetch('https://doctor-portal-server-api.onrender.com/users', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setCreatedUserEmail(email)
//       })
//   }



  return (
    <div>
      <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-6'>
          <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
          <form onSubmit={handleSubmit(handleSignUp)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>

              </label>
              <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required:
                    'Name is required',
                  minLength: {
                    value: 3,
                    message: 'must be Three chareacter '
                  }

                })}
              />
              {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required:
                    'email is required',

                  //massage: 'email is required'

                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Provide a valid email'
                  }
                })}
              />
              {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>

              </label>
              <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required:

                    'password is required',

                  minLength: {
                    value: 6,
                    message: 'six chareacter '
                  }
                })}

              />
              {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
            </div>

            {
              signUpError && <p className='text-red-600'>{signUpError}</p>
            }

            <input className='btn btn-accent w-full mt-7' value='Sign Up' type="submit" />
          </form>
          <p><small>Already have an account <Link className='text-primary' to="/login">pleac Log In</Link></small></p>

          <Social></Social>

        </div>
      </div>
    </div>
  );
};

export default SignUp;