import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user);
  useEffect(() => {
    if (user) {
      const email = user?.user?.email;
      const currentUser = { email: email };

      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => console.log("Inside useToken", data));
    }
  }, [user]);

  return [token];
};

export default useToken;
