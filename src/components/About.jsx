import { useEffect, useState } from "react";

const About = () => {
    const [loading,setLoading] = useState (true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])
  return (
    <main className=" flex justify-center py-40 md:mb-96">
      {loading ? (
        <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-32"></div>
      ) : (
        <h1 className="text-2xl">About Us</h1>
      )}
    </main>
  );
}

export default About;