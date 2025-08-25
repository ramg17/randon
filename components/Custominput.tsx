import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'



const Custominput = ({form,name,label,placeholder}:{form:any,name:string,label:string,placeholder:string}) => {
  return (
    
    <FormField
    control={form.control}
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