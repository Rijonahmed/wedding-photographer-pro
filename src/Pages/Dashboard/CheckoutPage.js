import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const CheckoutPage = () => {
  const { checkoutId } = useParams();
  const { user} = useContext(AuthContext)
  console.log(user);

  const [singleService, setSingleService] = useState({});
  const url = `http://localhost:5000/services/${checkoutId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

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

  return (
    <div>
      <section className="grid grid-cols-3 gap-4 ">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl lg:flex">
            <figure className="w-52">
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
        <form className="">
            <div className=" w-full">
              <label className="label">
                <span className="label-text">Your Ordet Product name </span>
              </label>
              <input
                type="text"
                disabled
                value={name}
                className="input input-bordered input-accent w-full"
              />
            </div>

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
                type="number"
                disabled
                value={price}
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your product Quantity</span>
              </label>
              <input
                name="quantity"
                type="number"
                className="input input-bordered input-accent w-full max-w-xs"
                required
              />
            </div>

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
                className="textarea textarea-bordered h-18"
                placeholder="Address"
                required
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
       
      </section>
    </div>
  );
};

export default CheckoutPage;
