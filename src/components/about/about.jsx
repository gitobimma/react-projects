import "./about.css";
import { DEVSKILLS } from "./devskills";
import { DESIGNSKILLS } from "./designskills";
import { Link } from "react-scroll";
import { motion, useTransform } from "framer-motion";
import me from "../../assets/igor-meltingorange.webp";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ImageContainer } from "./imageContainer";
import { InfoContainer } from "./infoContainer";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const About = () => {
  const { ref2 } = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["50% 1", "45% 0"],
  });

  const opacityVariants = {
    initial: {
      opacity: 0,
      offset: "50%",
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div className="about-section-container">
      <section ref={ref2} id="about-section">
        <div className="about-content">
          <div className="about-title">
            <h2>Über mich</h2>
          </div>

          <div className="skills-container">
            <InfoContainer />
            <ImageContainer />
          </div>
        </div>

        <svg class="arrowL" viewBox="0 0 757.76 2089.45">
          <defs></defs>
          <title>ArrL</title>
          <g id="Ebene_2" data-name="Ebene 2">
            <g id="Ebene_1-2" data-name="Ebene 1">
              <motion.path
                pathLength={scrollYProgress}
                class="cls-1-1"
                d="M286.72,14.43C204.56,110.91 86.67,278.78 31.27,514.57C8.74,610.46 -40.37,874.68 68.43,1144C132,1301.42 206,1352.59 239.8,1372.3400000000001C337.72,1429.4300000000003 435.62,1419.4200000000003 460.44,1415.7300000000002C485.03000000000003,1412.0900000000001 705.07,1379.4400000000003 733.35,1212.5100000000002C754.44,1088.14 658.44,951.9700000000001 532.44,932.6400000000001C450.55,920.1000000000001 370.98,959.1800000000002 324.63,1013.1000000000001C234.49999999999997,1117.9300000000003 256.78999999999996,1285.88 323.40999999999997,1378.5700000000002C361.77,1431.9600000000003 439.79,1495.2400000000002 499.62,1534.9600000000003C542.74,1563.5400000000002 587.04,1586.9900000000002 602.62,1637.5400000000002C614.38,1675.6800000000003 605.12,1714.0900000000001 601.46,1729.2800000000002C589.0699999999999,1780.71 566.97,1788.7 553.38,1829.15C536.27,1880.06 545.9899999999999,1942.57 575.4399999999999,1988.25C617.23,2053.06 689.62,2069.85 729.55,2074.06"
              />
              <motion.path
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "0px 0px -27% 0px" }}
                variants={opacityVariants}
                class="cls-2-2"
                d="M757.76 2075.35 718.89 2056.97 727.45 2073.72 717.15 2089.45 757.76 2075.35z"
              />
              <motion.path
                initial="initial"
                whileInView="animate"
                variants={opacityVariants}
                viewport={{ margin: "0px 0px -22% 0px" }}
                class="cls-2-2"
                d="M297.71,24.81a15,15,0,1,0-21.21,1.66A15,15,0,0,0,297.71,24.81Z"
              />
            </g>
          </g>
        </svg>
      </section>
    </div>
  );
};
