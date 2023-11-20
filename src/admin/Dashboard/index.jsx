import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import * as ReactS from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import Styles from "./Dashboard.module.scss";

import top_image from "../../assets/images/dashboard/top-image.jpg";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Dashboard(props) {
  const datas = [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [120, 19],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(8, 177, 186, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [12, 190],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [10, 19],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [10, 19],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [10, 19],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(173, 181, 189, 1)"],
          borderWidth: 1,
        },
      ],
    },
  ];

  const uData = [4000, 3000, 5000, 2780, 3890, 2390, 3490];
  const pData = [2400, 2398, 6800, 3908, 4800, 6800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX - containerRef.current.scrollLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.clientX - containerRef.current.offsetLeft;
      const walk = (x - startXRef.current) * 1;
      containerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };


  return (
    <React.Fragment>
      <div className={clsx(Styles.dashboard_wrapper)}>
        <div className={clsx(Styles.Dashboard, Styles.text)}>
          <div className={clsx(Styles.background_group_hello)}>
            {/* <img
              src={top_image}
              alt=""
              className={clsx(Styles.responsive_image)}
            /> */}
          </div>

          <div className={clsx(Styles.main)}>
            <div className={clsx(Styles.group_hello)}>
              <div className={clsx(Styles.hello_text)}>Hello Devs !</div>
              <div className={clsx(Styles.title)}>
                We are on a mission to help developers like you to build
                beautiful projects for free.
              </div>
            </div>
            <div className={clsx(Styles.group_Dashboard)}>
              <div
                className={clsx(Styles.group_chart)}
                ref={containerRef}
                onMouseDown={handleMouseDown}
              >
                {datas.map((data, index) => (
                  <div key={index} className={clsx(Styles.statistical_chart)}>
                    <div className={clsx(Styles.pie_chart)}>
                      <Doughnut data={data} />
                    </div>
                    <div className={clsx(Styles.title_chart)}>
                      <div>Total Sales</div>
                      <div className={clsx(Styles.text_b)}>$560K</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={clsx(Styles.group_chart)}>
                <div className={clsx(Styles.LineChart)}>
                  <div>
                    <LineChart
                      width={700}
                      height={340}
                      series={[
                        { data: pData, label: "pv" },
                        { data: uData, label: "uv" },
                      ]}
                      xAxis={[{ scaleType: "point", data: xLabels }]}
                    />
                  </div>
                  <div></div>
                </div>

                <div className={clsx(Styles.graphic_side)}>
                  <div className={clsx(Styles.visa, Styles.background_card)}>
                    <div className={clsx(Styles.card)}>
                      <div>
                        <div className={clsx(Styles.text_b)}> VISA</div>
                        <div className={clsx(Styles.text_13)}>
                          {" "}
                          PREMIUM ACCOUNT
                        </div>
                      </div>
                      <div>
                        <div
                          className={clsx(Styles.card_number, Styles.text_b)}
                        >
                          5789 **** **** 2847
                        </div>
                      </div>
                      <div>
                        <div className={clsx(Styles.text_11)}> Card holder</div>
                        <div> Mike Smith</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
