import React, { useState } from "react";
import { Row, Col, Flex, Rate } from "antd";
import { RatingProps } from "../common/Interfaces";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating: React.FC<RatingProps> = ({ average_rating, ratingCount }) => {
  const [value, setValue] = useState<number>(average_rating);

  return (
    <>
      <Flex gap="middle" vertical>
        <Flex gap="middle" vertical>
          <Row className="px-4">
            <Col span={4}>
              {/* <FaHeart className="text-red-600 cursor-pointer" /> */}
            </Col>
            <Col span={16}>
              <Rate
                tooltips={desc}
                onChange={setValue}
                value={average_rating}
              />{" "}
            </Col>
            <Col span={4}>{`(${ratingCount})`}</Col>
          </Row>
          {/* {value ? <span>{desc[movieRating.rating - 1]}</span> : null} */}
        </Flex>
      </Flex>
    </>
  );
};

export default Rating;
