import React from 'react';
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

class ParticlesContainer extends React.PureComponent {
    async customInit(engine) {
        await loadStarsPreset(engine);
    }

    render() {
        const options = {
            preset: "stars",
            background: {
                color: {
                    value: "#ffffff"
                }
            },
            particles: {
                color: {
                    value: "#2C6E49"
                }
            }
        };

        return (
            <Particles
                options={options}
                init={this.customInit}
                style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '-1', top: 0, left: 0 }}
            />
        );
    }
}

export default ParticlesContainer;
