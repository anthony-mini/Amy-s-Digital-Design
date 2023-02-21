import React from 'react';
import { Apps, Graphic, Illustration, MotionGraph, Photography, UxUi } from '../../assets';

export default function Disciplines() {
  return (
    <div className="section-2">
      <div className="container">
        <div className="bloc-1">
          <div className="bloc-1--container">
            <div className="Cube Cube--L colors--Blue">
              <p>Graphic design</p>
              <img src={Graphic} alt="illustration graphic design" />
            </div>
            <div className="bloc-1--container__1">
              <div className="bloc-ui-app">
                <div className="Cube Cube--S colors--Yellow">
                  <p>UI/UX</p>
                  <img src={UxUi} alt="illustration UI/UX" />
                </div>
                <div className="Cube Cube--S colors--Pink">
                  <p>Apps</p>
                  <img src={Apps} alt="illustration apps" />
                </div>
              </div>
              <div className="Cube Cube--M colors--Red">
                <p>Illustration</p>
                <img src={Illustration} alt="illustration" />
              </div>
            </div>
          </div>
        </div>
        <div className="bloc-2">
          <div className="Cube Cube--M colors--Cyan">
            <p>Photography</p>
            <img src={Photography} alt="illustration photography" />
          </div>
          <div className="Cube Cube--M colors--Purple">
            <p>Motion Graphic</p>
            <img src={MotionGraph} alt="illustration Motion Graphic" />
          </div>
        </div>
      </div>
    </div>
  );
}
