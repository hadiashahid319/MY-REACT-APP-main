import { useState } from "react";
function ChangeEvent() {
  //useState is a function that returns an array
  //of variable and a function
  //username is a variable and setUsername is a function
  const [username, setUsername] = useState("");
  const [key, setKey] = useState("");


  const handleChange = (e) => {
    setUsername(e.target.value);
    setKey(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };
  return (
    <>
      <form>
        Username
        <input type="text" value={username} onChange={handleChange} />
        Key
        <input type="text" value={key} onChange={handleChange} />
        <br />
        <button>LogIn</button>
        <p>{username}</p>
        <p>{key}</p>
      </form>
    </>
  );
}

export default ChangeEvent;