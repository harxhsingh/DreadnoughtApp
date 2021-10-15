import React,{useState} from "react";

function Contact() {
  const [data,setData] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:'',
  })

  const inputEvent = (event)=>{
    const{name,value}=event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    alert(`Your name:${data.fullname}, Mobile Number:${data.phone}, Email:${data.email}`)
  };

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit= {formSubmit} >
                <div className="form-group my-3">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter text here" required/>
                </div>
                <div className="form-group my-3">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" required/>
                </div>
                <div className="form-group my-3">
                  <label for="exampleFormControlInput1">Phone</label>
                  <input type="integer" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEvent} placeholder="Add country code" required/>
                </div>
                <div className="form-group my-3">
                  <label for="exampleFormControlTextarea1">Leave us a note</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={inputEvent} ></textarea>
                </div>
                <div className='col-12 my-3'>
                  <button className='btn btn-outline-primary' type='submit'>Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;