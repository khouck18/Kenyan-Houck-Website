import React from "react";
import { Box, Grid, Typography, Fab, Card } from "@mui/material";
import Headshot from "../Images/Headshot.jpg";
import Resume from "../Images/Kenyan_Houck_Resume.pdf";
import HandTracking from "../Images/HandTracking.mp4";
import InstagramDemo from "../Images/Insta_Demo.mp4"
import ShopifyDemo from "../Images/Shopify-App-Demo.mp4";
import AWSCertification from "../Images/AWS_Certified_Cloud_Practitioner_Certificate.pdf";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MailIcon from '@mui/icons-material/Mail';

const Home = () => {

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#28282B" }}>
            <Grid container spacing={2} sx={{ height: "100vh"}}>
                <Grid item xs={8}>
                    <Typography variant="h2" sx={{ ml: "25%", mt: "20%", color: "white"}}>Hello, I'm Kenyan Houck</Typography>
                </Grid>
                <Grid item xs={4}>
                 <Box sx={{ width: "300", height: "300", transform: "translateX(-25%)", mt: "20%"}}>
                    <img src={Headshot} alt="Headshot" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "25px"}} />
                 </Box>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <a href="https://github.com/khouck18" target="_blank" rel="noreferrer">
                        <Fab color="primary" aria-label="github" sx={{ mx: 5 }}>
                            <GitHubIcon />
                        </Fab>
                    </a>
                    <a href="https://www.linkedin.com/in/kenyanhouck/" target="_blank" rel="noreferrer">
                        <Fab color="primary" aria-label="linkedin" sx={{ mx: 5 }}>
                            <LinkedInIcon />
                        </Fab>
                    </a>
                    <a href={Resume} target="_blank" rel="noreferrer">
                        <Fab color="primary" aria-label="resume" sx={{ mx: 5 }}>
                            <ArticleIcon />
                        </Fab>
                    </a>
                    <a href={AWSCertification} target="_blank" rel="noreferrer">
                        <Fab color="primary" aria-label="certification" sx={{ mx: 5 }}>
                            <WorkspacePremiumIcon />
                        </Fab>
                    </a>
                    <a href="mailto:kenyanhouck5@gmail.com">
                        <Fab color="primary" aria-label="email" sx={{ mx: 5 }}>
                            <MailIcon />
                        </Fab>
                    </a>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={2} sx={{ height: "100vh", backgroundColor: "#353935"}}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{ textAlign: "center", marginTop: "5%", color: "white" }}>About Me</Typography>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "white", mx: "20%"}}>Hello, I'm Kenyan Houck, a passionate cloud software engineer specializing in React and JavaScript. Currently, I am proud to be a part of Intel, where I contribute to the development of a cutting-edge cloud application. My expertise lies in leveraging my front end and AWS knowledge to architect robust and secure cloud applications. Sample projects provided below.</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ m: 5, backgroundColor: "#28282B", height: "350px"}}>
                    <Typography variant="h5" sx={{ textAlign: "center", marginTop: "1%", color: "white" }}>Computer Vision Hand Tracking</Typography>
                        <video width="100%" controls> 
                            <source src={HandTracking} type="video/mp4" />
                        </video>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ m: 5, backgroundColor: "#28282B", height: "350px"}}>
                    <Typography variant="h5" sx={{ textAlign: "center", marginTop: "1%", color: "white" }}>Mock Zootopia Themed Instagram</Typography>
                        <video width="100%" controls> 
                            <source src={InstagramDemo} type="video/mp4" />
                        </video>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ m: 5, backgroundColor: "#28282B", height: "350px"}}>
                    <Typography variant="h5" sx={{ textAlign: "center", marginTop: "1%", color: "white" }}>Shopify App Demo</Typography>
                        <video width="100%" controls> 
                            <source src={ShopifyDemo} type="video/mp4" />
                        </video>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;