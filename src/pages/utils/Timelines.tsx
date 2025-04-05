import Grid from "@mui/material/Grid2";

import { Box } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot, { timelineDotClasses } from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
// import { FaBuildingColumns } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BiSolidFileJs } from "react-icons/bi";
import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiReactrouter,
  SiJest,
} from "react-icons/si";

import ProUI_Card from "../../components/ProUI_Elements/ProUI_Card/ProUI_Card";
// import { Description } from "@mui/icons-material";
import career_skills_data from "../../api/careerSkillsData";
import ProUI_Bookshelf from "../../components/ProUI_Elements/ProUI_BestBooks/ProUI_Bookshelf";

const FE_React_Dev_Roadmap = {
  coreFrontendSkills: [
    {
      title: "HTML5",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Semantic elements, Accessibility)",
    },
    {
      title: "CSS3",
      position: "right",
      icon: <FaCss3 />,
      description: "(Flexbox, Grid, Animations, Preprocessors like SASS)",
    },
    {
      title: "Boostrap",
      position: "right",
      icon: <SiBootstrap />,
      description: "(Grid system, Components, Validation, Customize)",
    },
    {
      title: "JavaScript(Basic)",
      position: "right",
      icon: <SiJavascript />,
      description: "(Variables, Data Types, Arrays, Objects, Functions)",
    },
    {
      title: "ES6+ JavaScript(Advanced)",
      position: "right",
      icon: <BiSolidFileJs />,
      description: "(Closures, Hoisting, Promises, Async/Await)",
    },
    {
      title: "TypeScript",
      position: "right",
      icon: <SiTypescript />,
      description: "(Optional, but preferred)",
    },
    {
      title: "React",
      position: "right",
      icon: <FaReact />,
      description: "(Hooks, Context API, Lifecycle Methods, State Management)",
    },
    {
      title: "State Management",
      position: "right",
      icon: <SiRedux />,
      description: "(Redux, Recoil, Zustand, or Context API)",
    },
    {
      title: "React Router",
      position: "right",
      icon: <SiReactrouter />,
      description: "(Dynamic Routing, Nested Routes)",
    },
    {
      title: "React/ Component Design Patterns",
      position: "right",
      icon: <GiGearStickPattern />,
      description: "(HOC, Render Props, Compound Components)",
    },
    {
      title: "Frontend Performance Optimization",
      position: "right",
      icon: <IoSpeedometerOutline />,
      description: "(Lazy Loading, Code Splitting, Memoization)",
    },
    {
      title: "Unit testing",
      position: "right",
      icon: <SiJest />,
      description: "(Jest, React Testing Library, Cypress)",
    },
  ],
  buildAndDeploymentTools: [
    {
      title: "Webpack / Vite",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Tree Shaking, Code Splitting)",
    },
    {
      title: "Babel",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Transpiling Modern JS)",
    },
    {
      title: "Package Managers",
      position: "right",
      icon: <FaHtml5 />,
      description: "(npm, yarn, pnpm)",
    },
    {
      title: "CI/CD Tools",
      position: "right",
      icon: <FaHtml5 />,
      description: "(GitHub Actions, Jenkins)",
    },
  ],
  coreBackendAndAPISkills: [
    {
      title: "REST APIs",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Fetch, Axios, Authentication)",
    },
    {
      title: "GraphQL",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Apollo Client, Queries, Mutations)",
    },
    {
      title: "WebSockets",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Real-time data, Socket.io)",
    },
  ],

  mustSkills: [
    {
      title: "Git & GitHub",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Branching, Merging, PRs)",
    },
    {
      title: "UI Libraries",
      position: "right",
      icon: <FaHtml5 />,
      description: "(MUI, Tailwind CSS, Chakra UI, Ant Design)",
    },
    {
      title: "Basic DSA & Algorithms",
      position: "right",
      icon: <FaHtml5 />,
      description: "(Array, Strings, Recursion, Sorting)",
    },
  ],
  //   buildAndDeploymentTools: [
  //     {
  //       title: "Webpack / Vite",
  //       position: "right",
  //       icon: <FaHtml5 />,
  //       description: "(Tree Shaking, Code Splitting)",
  //     },
  //     {
  //       title: "Babel",
  //       position: "right",
  //       icon: <FaHtml5 />,
  //       description: "(Transpiling Modern JS)",
  //     },
  //     {
  //       title: "Package Managers",
  //       position: "right",
  //       icon: <FaHtml5 />,
  //       description: "(npm, yarn, pnpm)",
  //     },
  //     {
  //       title: "CI/CD Tools",
  //       position: "right",
  //       icon: <FaHtml5 />,
  //       description: "(GitHub Actions, Jenkins)",
  //     },
  //   ],
  interviewRounds: [
    {
      title: "Resume Screening Round:",
      position: "right",
      icon: <FaHtml5 />,
      description: function () {
        return (
          <ul>
            <li>
              Recruiter checks for React.js, JavaScript, TypeScript, and project
              experience.
            </li>
            <li>They may ask about your projects and role in them.</li>
          </ul>
        );
      },
    },

    {
      title: "Technical Online Round (Coding Test or Live Coding):",
      position: "right",
      icon: <FaHtml5 />,
      description: function () {
        return (
          <ul>
            <li>DSA questions (Easy-Medium on LeetCode)</li>
            <li>
              JavaScript-based problem-solving (Closures, Promises, Async/Await)
            </li>
            <li>React coding problems (useState, useEffect, Optimizations)</li>
          </ul>
        );
      },
    },
    {
      title: "Technical Interview (1-2 Rounds with Engineers):",
      position: "right",
      icon: <FaHtml5 />,
      description: function () {
        return (
          <ul>
            <li>Deep dive into React and JavaScript concepts.</li>
            <li>
              Ask about state management, component architecture, performance
              optimizations.
            </li>
            <li>
              Code a UI feature in React (e.g., a To-Do list, API integration).
            </li>
          </ul>
        );
      },
    },
    {
      title: "System Design Round (For Senior Roles):",
      position: "right",
      icon: <FaHtml5 />,
      description: function () {
        return (
          <ul>
            <li>
              Design a frontend architecture (Folder structure, State
              management, Performance).
            </li>
          </ul>
        );
      },
    },
    {
      title: "HR/Managerial Round:",
      position: "right",
      icon: <FaHtml5 />,
      description: function () {
        return (
          <ul>
            <li>
              Questions on teamwork, problem-solving, and project handling.
            </li>
          </ul>
        );
      },
    },
  ],
};

const RenderTimeline = ({ skillData }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineDotClasses.root}`]: {
          flex: 0.2,
          top: 0,
        },
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {skillData.map((skill, index) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">{skill.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="body1" component="span">
                {skill.title}
              </Typography>
              <Typography variant="body2">
                {typeof skill.description === "function" ? (
                  <Box sx={{ ml: 2.2 }}>{skill.description()}</Box>
                ) : (
                  skill.description
                )}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

const Timelines: React.FC = () => {
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <Typography variant="h6">
            Frontend/ React Developer Role Skills
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ProUI_Card title="Core Frontend Skills:" actions="true">
            {/* <Timeline position="alternate">
              {FE_React_Dev_Roadmap.coreFrontendSkills.map((skill, index) => {
                return (
                  <TimelineItem>
                    <TimelineOppositeContent
                      key={index}
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      9:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary">{skill.icon}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="body1" component="span">
                        {skill.title}
                      </Typography>
                      <Typography variant="body2">
                        {skill.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline> */}
            <RenderTimeline
              skillData={FE_React_Dev_Roadmap.coreFrontendSkills}
            />
          </ProUI_Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 3 }}>
          <ProUI_Card
            title="Backend & API Skills (Basic Knowledge for Frontend):"
            actions="true"
          >
            <RenderTimeline
              skillData={FE_React_Dev_Roadmap.coreBackendAndAPISkills}
            />
          </ProUI_Card>
          <ProUI_Card title="Other Important and Must Skills:" actions="true">
            <RenderTimeline skillData={FE_React_Dev_Roadmap.mustSkills} />
          </ProUI_Card>

          <ProUI_Card title="Build & Deployment Tools:" actions="true">
            <RenderTimeline
              skillData={FE_React_Dev_Roadmap.buildAndDeploymentTools}
            />
          </ProUI_Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ProUI_Card title="Technical Interviews (India)" actions="true">
            <RenderTimeline skillData={FE_React_Dev_Roadmap.interviewRounds} />
          </ProUI_Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          Best Books:
          <ProUI_Bookshelf career_skills_data={career_skills_data} />
        </Grid>
      </Grid>
    </>
  );
};

export default Timelines;
