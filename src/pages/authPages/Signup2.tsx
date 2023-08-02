// SignUp.tsx

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { signup } from "../../utils/Apis"; // Replace '../api' with the path to your API functions
// import { iUser } from '../../types';
import { User, UserError } from '../../hooks/global/ReduxState';

// // Define the validation schema using Yup
// const schema = yup.object().shape({
//   fullName: yup.string().required('Full Name is required'),
//   businessName: yup.string().required('Business Name is required'),
//   businessContact: yup.string().required('Business Contact is required'),
//   businessServices: yup.string().required('Business Services is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   memberImage: yup.mixed().required('Member Image is required'),
//   password: yup.string().min(8).required('Password is required'),
// });

// type FormData = {
//   fullName: string;
//   businessName: string;
//   businessContact: string;
//   businessServices: string;
//   email: string;
//   memberImage: string;
//   password: string;
// };

const SignUp2: React.FC = () => {
  
  const dispatch = useDispatch();
  // const currentUser = useSelector((state: RootState) => state.currentUser);
  // const error = useSelector((state: RootState) => state.error);

  // Define the validation schema using Yup
  const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  businessName: yup.string().required('Business Name is required'),
  businessContact: yup.string().required('Business Contact is required'),
  businessServices: yup.string().required('Business Services is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  memberImage: yup.string().required('Member Image is required'),
  password: yup.string().min(8).required('Password is required'),
  });

  type formData = yup.InferType<typeof schema>;

  const { handleSubmit, control, formState, setValue, reset } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const [picturePreview, setPicturePreview] = useState<string | null>(null);

  const signUpMutation = useMutation({
  // <unknown, Error, iUser>(
    // (data) => signup, 
    // Replace 'signup' with your actual signup function that makes the API call
    
    mutationKey: ['iStandUser'],
    mutationFn: signup,

    // {
      // onError: (error) => {
      //   // Handle errors here if needed
      // },

      onSuccess: (data: any) => {
        try {
          dispatch(User(data));
        } catch (err: any) {
          dispatch(UserError(err.message))
        }
        // dispatch(User(response.data));
        // Handle successful signup, e.g., redirect to dashboard
        // dispatch(UserError(err.message))
      },
    }
);

  const onSubmit = handleSubmit(async (data) => {
    signUpMutation.mutate(data);
    reset

    console.log(data)
  });

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPicturePreview(URL.createObjectURL(file));

      // Set the value of the memberImage field in the form
      setValue('memberImage', "string");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          <p>{errors.fullName?.message}</p>
        </div>
        <div>
          <label htmlFor="businessName">Business Name</label>
          <Controller
            name="businessName"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          <p>{errors.businessName?.message}</p>
        </div>
        <div>
          <label htmlFor="businessContact">Business Contact</label>
          <Controller
            name="businessContact"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          <p>{errors.businessContact?.message}</p>
        </div>
        <div>
          <label htmlFor="businessServices">Business Services</label>
          <Controller
            name="businessServices"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          <p>{errors.businessServices?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input type="email" {...field} />}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="memberImage">Member Image</label>
          <input
            type="file"
            id="memberImage"
            accept="image/*"
            onChange={handlePictureChange}
          />
          <p>{errors.memberImage?.message}</p>
        </div>
        {picturePreview && <img src={picturePreview} alt="Preview" />}
        <div>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <input type="password" {...field} />}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp2;
