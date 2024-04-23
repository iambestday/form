import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email(' آدرس ایمیل وارد شده معتبر نیست => مثال example@gmail.com ').required('وارد کردن ایمیل الزامی است'),
  domain: yup.string().matches(
    /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[\w-]+(?:\.[\w-]+)+(?::\d+)?(?:\/\S*)?$/,
    '.فرمت دامنه وارد شده معتبر نیست => مثال site.com  '
    ).required('وارد کردن دامنه الزامی است'),
  ip: yup.string().matches(
    /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:([0-9a-fA-F]{1,4})$/,
    'فرمت آدرس IP وارد شده معتبر نیست'
  ).required('وارد کردن آدرس IP الزامی است'),
  firstName: yup.string().matches(/^[\u0600-\u06FF\s]+$/, 'نام باید به فارسی باشد').required('وارد کردن نام الزامی است'),
  lastName: yup.string().matches(/^[\u0600-\u06FF\s]+$/, 'نام خانوادگی باید به فارسی باشد').required('وارد کردن نام خانوادگی الزامی است'),
});

const RegisterForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        فرم ثبت نام دامنه
      </h1>
      <p className="mx-auto my-8 max-w-md text-center text-gray-500">
        شرکت ما مالکیت ۱۰۰ درصد دامنه را در اختیار شما قرار می‌دهد و در هر
        زمان و به هر دلیل می‌توانید دامنه خود را از شرکت ما منتقل کنید.
      </p>

    <form onSubmit={handleSubmit(onSubmit)} 
    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">     
    <p className="text-center text-sm font-medium">لطفا مشخصات خواسته شده را با دقت وارد کنید</p>

      <div>
      <label for="email" className="sr-only">Email</label>
        <div className="relative">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input  {...field} 
           className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm" 
          placeholder= "ایمیل"      
          />
        }
        />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
        </div>
        <p className='text-red-600 py-2'>{errors.email?.message}</p>

      </div>

      <div>
      <label for="domain" className="sr-only">Domain</label>
      <div className="relative">
      <Controller
  name="domain"
  control={control}
  render={({ field }) => (
    <input
    {...field}
    className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
    placeholder="دامنه خود را وارد کنید"
    />
  )}
/>

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
            </svg>
          </span>
        </div>
        <p className='text-red-600 py-2'>{errors.domain?.message}</p>

      </div>


      <div>
            <label for="ip" className="sr-only">
              IP
            </label>
            <div className="relative">

            <Controller
  name="ip"
  control={control}
  render={({ field }) => (
    <input
      className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
      {...field}
      placeholder="IP خود را وارد کنید"
    />
  )}
/>
     
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </span>
            </div>
            <p className='text-red-600 py-2'>{errors.ip?.message}</p>

            </div>


            <div>
            <label for="name" className="sr-only">
              Name
            </label>
            <div className="relative">
        <Controller
          name="firstName"
          
          control={control}
          render={({ field }) => <input {...field} 
          className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
          placeholder="نام"

          />}
        />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
      </div>
      <p className='text-red-600 py-2'>{errors.firstName?.message}</p>

      </div>

      <div>
            <label for="family" className="sr-only">
              Family
            </label>
            <div className="relative">
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <input {...field}                 
          className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
          placeholder='نام خانوادگی'
          />}
        />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
         </div>
        <p className='text-red-600 py-2'>{errors.lastName?.message}</p>
      </div>
      <button type="submit"  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-lg font-medium text-white"
>ثبت</button>
    </form>
      </div>
    </div>
  );
};

export default RegisterForm;
