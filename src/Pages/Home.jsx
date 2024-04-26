import { toast } from "react-toastify";

const Home = () => {
  const notify = () => toast.success("user add hoye onk kosto hocce taina!");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    // console.log(user, "user from from");

    // data post
    fetch(`http://localhost:5000/users`, {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          notify()
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-10">
        CRUD manage practice.
      </h1>
      <form onSubmit={handleSubmit}>
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
              className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-4 py-2 border rounded-md border-gray-800"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
