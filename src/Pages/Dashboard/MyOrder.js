import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    console.log(url)
  
    const { data: bookings = [] } = useQuery({
      queryKey: ['booking', user.email],
      queryFn: async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
      }
    })
  
    return (
        <div>
           <div>
      <h1 className='text-2xl font-bold mb-4'>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Booking Date</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings?.map((booking, i) =>
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.productName}</td>
                  <td>{booking.bookingDate}</td>              
                  <td>{booking.price}</td>
                  <td>coming soon</td>
                 
                </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
        </div>
    );
};

export default MyOrder;