import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-span-2 ">
        <img
          src="anhhuy.jpg"
          alt="Profile Picture"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="col-start-4 col-span-2">
        <h1 className="text-2xl font-bold">Trần Bảo Anh Huy</h1>
        <h2 className="text-lg text-gray-600">Developer Fullstack</h2>
      </div>
    </div>
  );
};

export default DashboardPage;
