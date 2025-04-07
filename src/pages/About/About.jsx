import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import dyp from "../../assets/images/dyp.png";
import highschool from "../../assets/images/highschool.jpeg";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
          I'm a passionate programmer who thrives on challenges and continuous improvement.
          A strong team player, I'm always eager to learn new technologies and help others grow alongside me.
            <br />Born and raised in Bihar, India, I have a deep interest in emerging Web3 technologies.
             Outside of coding, you'll find me enjoying a game of chess or cricket, and exploring new places — traveling always inspires and refreshes my mind.

          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Chandigarh University, Mohali",
                p: "Bachelors of Engineering (2021-2025)",
                image: dyp,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "K.P College Murliganj",
                p: "Intermdiate of science (2018-2020)",
                image: highschool,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Rajnandan Pd H/s Murliganj",
                p: "Matriculation(2016-2018)",
                image: sos,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
