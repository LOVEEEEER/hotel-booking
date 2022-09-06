import React from "react";
import { Skeleton } from "@mui/material";
import _ from "lodash";

const RoomsListLoading = ({ pageSize }) => {
  const array = _.range(1, pageSize);
  return (
    <>
      <div className="container rooms-list">
        {array.map((item) => (
          <div className="room-card-loading" key={item}>
            <div className="room-card-loading__first-section">
              <div className="room-card-loading__img">
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={350}
                  width={400}
                />
              </div>
              <div className="room-card-loading__first-section_text">
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={50}
                  width={500}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={140}
                  width={500}
                />
              </div>
            </div>
            <div className="room-card-loading__second-section">
              <Skeleton
                variant="text"
                animation="wave"
                height={50}
                width={100}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={100}
                width={130}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={60}
                width={150}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomsListLoading;