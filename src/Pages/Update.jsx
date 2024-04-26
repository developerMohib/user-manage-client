import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const notify = () => toast("aha shanti pacco!");
    const loadData = useLoaderData();
    // console.log(loadData , 'load usaer data ');

    const handleUpdate = (e) => {
        const formData = e.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const updateUser = {name, email};
        // console.log(updateUser)

        // update data to pass server and database
        fetch(`http://localhost:5000/users/${loadData._id}`, {
          method: 'PUT',
          headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            notify()
            alert('hei hei vai')
        }
        })
    }

    return (
        <div>
            <h1 className="my-5 font-bold text-2xl text-center" >Update Profile Page </h1>
            <h1 className="my-5 font-bold text-2xl text-center" >Name : {loadData?.name} </h1>
            <form onSubmit={handleUpdate}>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="col-span-full my-3 bg-base-300">
        <label htmlFor="username" className="text-sm">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="name"
          placeholder="Username"
          defaultValue= {loadData?.name}
          className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
        />
      </div>

      <div className="col-span-full my-3 bg-base-300">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          defaultValue= {loadData?.email}
          className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
        />
      </div>
    </div>
    
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="px-4 py-2 border rounded-md border-gray-800"
      >
        Update User
      </button>
    </div>
  </form>
        </div>
    );
};

export default Update;