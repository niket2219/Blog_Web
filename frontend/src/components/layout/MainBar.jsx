import React from "react";
import "./MainBar.css";
import { Button, Paper } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Carousel from "react-material-ui-carousel";
import Trivia from "../miniComponents/Trivia";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";

const Item = (props) => {
  return (
    <>
      <Trivia />
    </>
  );
};

const MainBar = () => {
  const { text } = useTypewriter({
    words: ["Explore", "Publish"],
    loop: {},
  });
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <section id="niket">
      <div className="niket">
        <div className="textwala">
          <div className="explorer">
            {/* <h3 className="typewritter">Explore projects on</h3> */}
            <h3>
              <Typewriter
                style={{ fontSize: "3em" }}
                options={{
                  strings: ["Explore Projects On", "Publish Your Own Project"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <div>
            <div className="maintext">
              <div className="head">
                <h2 data-text="Project_Nest">Project_Nest</h2>
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              The Source of different Software and Hardware Projects.Here You
              can find Articles related to projects which solve different real
              world problems to get started with.
            </p>
          </div>
          <div className="buttonhai">
            <Button
              variant="contained"
              color="secondary"
              endIcon={<DoubleArrowIcon />}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className="gifwala">
          <Carousel navButtonsAlwaysVisible={true}>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MainBar;
