import React from "react";

const GetName = ({ params }) => {
  const email = decodeURIComponent(params.email);
  return (
    <div>
      
      {email == "Roman Howladar" ?(
        <p>This email is Correct:{email}</p>
      ):(
        <p>Not Correct:{email}</p>
      )}
    </div>
  );
};

export default GetName;
