// import { useState } from "react";
import { useState } from "react";
import { Link, useLoaderData} from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
  const notify = () => toast.warning("user delete hoye onk kosto hocce taina!");
  const userLoad = useLoaderData();
    const [remainUsers, setRemain] = useState(userLoad)

  const handleDelete = (id) => {
    console.log(id, 'id delete');

    // data delete 
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json() )
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0 ){
          notify('delete kore diyeco suna.. ah kosto hocce taina')
          const remaingCount = remainUsers.filter(user => user._id !== id );
          setRemain(remaingCount)
      }
    })
  }
  // console.log(userLoad, "users");
  return (
    <div>
      <h1 className="text-2xl text-center my-3" >This is users </h1>
        <div className="grid grid-cols-3 gap-8 mt-16">
        {remainUsers.map((user) => (
        
      <div key={user._id}
      className="card w-96 bg-base-100 shadow-xl image-full"
    >
      <div className="card-body">
        <h2 className="card-title"> Name : {user.name }</h2>
        <p> Id : {user._id} </p>
        <p> Email : {user.email} </p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between ">
          <Link to= {`/update/${user._id}`} > <button className="btn btn-primary"> Update </button> </Link>
          <button onClick={ () => handleDelete(user._id)} className="btn btn-primary"> Delete </button>
        </div>
      </div>
    </div>
      ))}
        </div>
    </div>
  );
};

export default Users;
