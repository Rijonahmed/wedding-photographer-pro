import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddPhoto = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const photoHostKey = process.env.REACT_APP_imgbb_key;
   
    const handleAddPhoto = data => {
       
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${photoHostKey}`;
        fetch(url, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(imgdata => {
            if (imgdata.success) {
    
              const photo = {
              
                img: imgdata.data.url
              }
           
    
              fetch('http://localhost:5000/photos', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                 
                },
                body: JSON.stringify(photo)
              })
                .then(res => res.json())
                .then(result => {
                  console.log(result)
                  toast.success(`Photo Add Successful`)
                  navigate('/gallery')
    
                })
            }
          }
          ) 
    
      }
    return (
        <div>
              <div className='w-96 p-7'>
      <h1 className="text-3xl font-bold">Add A PHOTO</h1>
      <form onSubmit={handleSubmit(handleAddPhoto)}>

       

      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>

          </label>
          <input type="file" className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required:
                'Photo is required',
              minLength: {
                value: 3,
                message: 'must be Three chareacter '
              }

            })}
          />
          {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}

        </div>


        <input className='btn btn-accent w-full mt-7' value='Add Photo' type="submit" />
      </form>

    </div>
        </div>
    );
};

export default AddPhoto;