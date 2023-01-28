import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      const currentUser = { email: email };

      fetch(`https://doctors-portal-server-seven-mu.vercel.app/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(
            `https://doctors-portal-server-seven-mu.vercel.app/jwt?email=${email}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
                setToken(data.accessToken);
              }
            });
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
