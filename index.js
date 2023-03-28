// Add your code here

function submitData(name, email) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  };
  return fetch("http://localhost:3000/users", config)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error");
      }
      return res.json();
    })
    .then((data) => {
      document.body.innerHTML = data;
    })
    .catch((error) => {
      document.body.innerHTML = error;
    });
}
