
import { Input, Textarea } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaUser, } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(true);
  const  handleSubmit = () => {
    try{
    setName("");
    setEmail("");
    setMessage("");
        console.log({name,email,message});
    if (name === '' || email === '' || message === '') {
      toast.error('All fields are required');
      return;
    }else{
        toast.success("Submit success");
    }
    }
    catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 700);
  }, []);

  
  return (
    <main className="px-10 py-44 md:mb-96 lg:mb-0">
      {loading ? (
        <div className="flex justify-center h-screen">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-32"></div>
        </div>
      ) : (
        <form className="flex justify-center mb-3">
          <div className="flex w-96 flex-col gap-6">
            <Input
              color="blue"
              size="lg"
              label="Name"
              icon={<FaUser />}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              color="blue"
              size="lg"
              label="Email"
              type="email"
              icon={<FaEnvelope />}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Textarea
              color="blue"
              size="lg"
              label="Massage"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              type="button"
              className="bg-teal-900 p-2 rounded-md text-white"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      )}
    </main>
  );
}

export default Contact