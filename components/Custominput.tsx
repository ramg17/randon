import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'



interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>;
  name: string;
  label: string;
  placeholder: string;
}



const Custominput = ({control, name, label,placeholder}:CustomInput) => {
  return (
    
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className='form-item'>
       <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>{label}</FormLabel>
       <div className='flex flex-col w-full gap-1.5'>
         <FormControl>
           <Input placeholder={placeholder}
           className='input-class'{...field}  />
         </FormControl>
         <FormMessage className='text-12 font-normal text-red-500 mt-2' />
       </div>
      </div>
    )}
    
    />
  )
}

export default Custominput