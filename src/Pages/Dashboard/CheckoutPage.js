import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { toast } from "react-hot-toast";

const CheckoutPage = () => {
  const { checkoutId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  

  const [singleService, setSingleService] = useState({});
  const url = `http://localhost:5000/services/${checkoutId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, [checkoutId]);

  const {
    name,
    price,
    images,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
  } = singleService;
  const [selected, setSelected] = useState(new Date());

  const date = format(selected, 'PP')
  console.log(date);




  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    


    const booking = {
      bookingDate: date,
      address,
      email,
      phone,
      productName: name,
      price: price

    }
    fetch('http://localhost:5000/bookings', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)

    })


      .then(res => res.json())
      .then(data => {

        if (data.acknowledged) {
          toast.success('Photo Grapher booking success')
          navigate('/services')
        }
        else {
          toast.error(data.message);

        }

      });

    
  }



  return (
    <div>
      <section className="grid lg:grid-cols-3 gap-4 ">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl lg:flex">
            <figure className="w-52 m-auto">
              <img src={images} alt="wedding img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <h3 className="lg:text-3xl text-2xl font-bold">{price}</h3>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
              <p>{text5}</p>
              <p>{text6}</p>
              <p>{text7}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
    
          <form onSubmit={handleBooking} className="">
            <div className="sm:form-control sm:w-auto lg:w-full ">
              <label className="label">
                <span className="label-text">Your Ordet Product name </span>
              </label>
              <input
                type="text"
                disabled
                value={name}
                className="input input-bordered input-accent "
              />
            </div>

            <div className="lg:flex lg:justify-between lg:gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user.email}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user.displayName}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your total booking Price</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={price}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>

            <div className="lg:flex lg:justify-between lg:gap-4">
              <div>
              <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  please type your Phone number
                </span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input input-bordered input-accent w-full max-w-xs"
                required
              />
              </div>
              <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">please type your Address</span>
              </label>
              <textarea
                name="address"
                className="textarea textarea-accent h-18"
                placeholder="Address"
                required
              ></textarea>
            </div>

          

          

              </div>
              <div>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
      
                />
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs mt-10"
            />
          </form>

        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
