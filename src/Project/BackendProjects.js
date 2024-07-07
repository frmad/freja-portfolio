import React from 'react';
import ProjectCard from './ProjectCard';

const BackendProjects = () => {
    return (
        <div>
            <h4>Backend Projects</h4>
            <div className="row">
                <ProjectCard
                    title="Recipe page project"
                    description="I created this project to keep track of my favorite recipes"
                    tech="Developed using React JS"
                    linkText="Open Recipe Project"
                    linkUrl="/recipes"
                    external={false}
                />
                <ProjectCard
                    title="Card 3"
                    description="Some text"
                    tech="Some text"
                    linkText="This is a link"
                    linkUrl="https://github.com/frmad?tab=repositories"
                    external={true}
                />
            </div>
        </div>
    );
};

export default BackendProjects;