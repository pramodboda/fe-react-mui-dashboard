import Grid from "@mui/material/Grid2";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';



// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { FaBuildingColumns } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiBootstrap } from 'react-icons/si';


import ProUI_Card from '../../components/ProUI_Elements/ProUI_Card/ProUI_Card';

const FE_React_Dev_Roadmap = [{ title: "HTML5", position: "right", icon:<FaHtml5/> }, { title: "CSS3", position: "right", icon:<FaCss3 />}, { title: "Boostrap", position: "right", icon: <SiBootstrap />}, { title: "JavaScript", position: "right", icon: <SiJavascript />}, { title: "ES6+", position: "right", }, { title: "TypeScript", position: "right", icon: <SiTypescript/> }, { title: "React", position: "right", icon: <FaReact/> }, { title: "State Management", position: "right", icon: <FaBuildingColumns/> }, { title: "React Router", position: "right" }, { title: "Component Design Patterns", position: "right"},{ title: "Frontend Performance Optimization", position: "right"}, { title: "Unit testing", position: "right"}]

const Timelines: React.FC = () => {
    return <>

        <Grid container>
            <Grid size={{ xs: 12, lg: 3 }}>
                <ProUI_Card>
                    <Timeline position="alternate">
                        {FE_React_Dev_Roadmap.map((skill, index) => {
                            return <TimelineItem>
                                <TimelineOppositeContent
                                    key={index}
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    9:30 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                    {skill.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {skill.title}
                                    </Typography>
                                    <Typography>Because you need strength</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        })}




                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                9:30 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Eat
                                </Typography>
                                <Typography>Because you need strength</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Sleep
                                </Typography>
                                <Typography>Because you need rest</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </ProUI_Card>
            </Grid>
        </Grid>



    </>
}

export default Timelines;