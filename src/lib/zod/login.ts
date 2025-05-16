import { object, string } from 'zod';

export const signInSchema = object({
  email: string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .max(32, 'Password must be less than 32 characters')
});
