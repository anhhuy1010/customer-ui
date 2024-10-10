import React from "react";
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify-icons/mdi/phone';
import emailIcon from '@iconify-icons/mdi/email';
import mapMarkerIcon from '@iconify-icons/mdi/map-marker';

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 container mx-auto">
        <div className="col-start-1 col-span-1 container mx-auto">
          <img
            src="anhhuy.jpg"
            alt="Profile Picture"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "10px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="col-start-3 col-span-4 container mx-auto">
          <h1
            className="text-[50px] font-bold container mx-auto"
            style={{ marginTop: "30px" }}
          >
            Trần Bảo Anh Huy
          </h1>
          <h2
            className="text-[30px] text-gray-600 container mx-auto"
            style={{ marginLeft: "90px" }}
          >
            Developer Fullstack
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 container mx-auto">
        <div className="col-start-1 col-end-6 container mx-auto">
          <h3 className="text-[25px] font-bold container mx-auto">Career Goals</h3>
          <p>
            My desire is to become a developer, I want to work in a company.
          </p>
          <p>Key Skills: JavaScript</p>
          <p>No small projects to know how a project works.</p>
        </div>

        <div className="col-start-6 col-end-12 container mx-auto">
          <h3 className="text-[25px] font-bold container mx-auto">Education</h3>
          <p className="font-bold">VĂN LANG UNIVERSITY | 2021 - Now</p>
          <p>• Industry: Information Technology</p>
          <p>• Specialty: Software Technology</p>
        </div>

        <div className="col-start-1 col-end-6 container mx-auto">
          <h3 className="text-[25px] font-bold container mx-auto">Contact</h3>

          <p>
            <Icon
              icon={phoneIcon}
              style={{ width: "20px", marginRight: "10px", float: "left" }}
            />
            0792729227
          </p>

          <p>
            <Icon
              icon={emailIcon}
              style={{
                width: "20px",
                verticalAlign: "middle",
                marginRight: "10px",
                float: "left",
              }}
            />
            tranbaoanhhuy6@gmail.com
          </p>

          <p>
            <Icon
              icon={mapMarkerIcon}
              style={{
                width: "20px",
                verticalAlign: "middle",
                marginRight: "10px",
                float: "left",
              }}
            />
            100/25 Street No. 3, Go Vap, Ho Chi Minh City
          </p>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
