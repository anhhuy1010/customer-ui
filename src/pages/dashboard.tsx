import React from "react";
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify-icons/mdi/phone';
import emailIcon from '@iconify-icons/mdi/email';
import mapMarkerIcon from '@iconify-icons/mdi/map-marker';
import githubIcon from '@iconify-icons/mdi/github';

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-10 gap-2 container mx-auto">
        <div className="col-start-2 col-span-2 container mx-auto">
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
        <div className="col-start-4 col-span-5 container mx-auto">
          <h1
            className="text-[70px] font-bold container mx-auto"
            style={{ marginTop: "30px" }}
          >
            Trần Bảo Anh Huy
          </h1>
          <h2
            className="text-[42px] text-gray-600 container mx-auto"
            style={{ marginLeft: "90px" }}>
            Developer Fullstack
          </h2>
        </div>


      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-start-2 col-end-6">
          <h3 className="text-[25px] font-bold container mx-auto">Career Goals</h3>
          <p>My desire is to become a developer,I want to work in a young and dynamic environment.</p>
        </div>

        <div className="col-start-8 col-end-12">
          <h3 className="text-[25px] font-bold container mx-auto">Education</h3>
          <p className="font-bold">VĂN LANG UNIVERSITY | 2021 - Now</p>
          <p>• Industry: Information Technology</p>
          <p>• Specialty: Software Technology</p>
        </div>

        <div className="col-start-2 col-end-6 mt-8">
          <h3 className="text-[25px] font-bold container mx-auto">Work Skills</h3>
          <p>
            • Be exposed to basic
          </p>
          <p>
            programming languages:
          </p>
          <p>
            + Back-end: Golang
          </p>
          <p>• Understanding and Using Microservice Software Architecture</p>
          <p>• Be able to use MongoDB</p>
        </div>

        <div className="col-start-8 col-end-12 mt-8">
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

          <p>
            <Icon
              icon={githubIcon}
              style={{
                width: "20px",
                verticalAlign: "middle",
                marginRight: "10px",
                float: "left",
              }}
            />
            https://github.com/anhhuy1010
          </p>
        </div>

        <div className="col-start-2 col-end-6 mt-8">
          <h3 className="text-[25px] font-bold container mx-auto">Work Experience</h3>
          <p>
            • Diqit Company - Programer Intern(05/2024 -08/2024)
          </p>
          <p>
            Develop a sales management web application with Go and gRPC technology.
          </p>
        </div>

      </div>
    </div>
  );
};
export default DashboardPage;
