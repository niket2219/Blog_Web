import React from "react";
import CountUp from "react-countup";
import "./counter.css";

const Counters = () => {
  return (
    <div class="counters">
      <div>
        <div class="counter">
          <h1>
            <span data-count="128">
              <CountUp
                start={0}
                end={100}
                enableScrollSpy={true}
                scrollSpyDelay={1}
                delay={1}
              />
              +
            </span>
          </h1>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {" "}
              <path
                fill="#f0f2f4"
                d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"
              />
            </svg>
          </span>
          <h3>Projects completed</h3>
        </div>
        <div class="counter">
          <h1>
            <span data-count="128">
              <CountUp
                start={0}
                end={30}
                enableScrollSpy={true}
                scrollSpyDelay={1}
                delay={1}
              />
              +
            </span>
          </h1>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="#f6f7f8"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
              />
            </svg>
          </span>
          <h3>Authors Registered</h3>
        </div>
        <div class="counter">
          <h1>
            <span data-count="128">
              <CountUp
                start={0}
                end={1000}
                enableScrollSpy={true}
                scrollSpyDelay={1}
                delay={1}
              />
              +
            </span>
          </h1>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="#f6f7f8"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
              />
            </svg>
          </span>
          <h3>Project Followers</h3>
        </div>
        <div class="counter">
          <h1>
            <span data-count="128">
              <CountUp
                start={0}
                end={25}
                enableScrollSpy={true}
                scrollSpyDelay={1}
                delay={1}
              />
              +
            </span>
          </h1>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#f6f7f8"
                d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
              />
            </svg>
          </span>
          <h3>Recent Projects</h3>
        </div>
      </div>
    </div>
  );
};

export default Counters;
