import { Card, CardMedia, CardContent, Typography, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import projects from "../utils/projects";

export default function Project() {
    return (
        <Grid container spacing={2} sx={{ margin: '20px' }}>
            {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.name}>
                    <Card key={project.name} sx={{ width: '100%', marginBottom: '20px' }}>
                        <CardContent sx={{ display: 'flex', backgroundColor: 'primary.main', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div">
                                {project.name}
                            </Typography>
                        </CardContent>
                        <CardActionArea href={project.site} target="_blank">
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.name}
                                sx={{ width: '100%', height: "250px" }}
                            />
                        </CardActionArea>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'primary.main' }}>
                            <Button color="inherit" size="small" href={project.repo} target="_blank">
                                Repo
                            </Button>
                            <Button color="inherit" size="small" href={project.site} target="_blank">
                                Site
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}