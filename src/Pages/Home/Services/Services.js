import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Service from './Service';
import Loading from '../../../Shared/Loading';



const Services = () => {
    const { data: Services = [],isLoading } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/services`)
          const data = await res.json()
          return data
        }
      })
      console.log(Services);
      if (isLoading) {
        return <Loading></Loading>
      }
    return (
        <div>
           <h2 className='text-2xl lg:text-3xl font-bold text-center'>Our Services</h2>
              <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-8'>
        {
          Services.map(service => <Service 
          key={service._id}
          service={service}
          >
            

          </Service>)
        }

      </div>
        </div>
    );
};

export default Services;