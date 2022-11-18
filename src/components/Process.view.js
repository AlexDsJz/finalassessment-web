import React from "react";
import PropTypes from "prop-types";

const Process = ({ process }) => (
  <div >
    <div key={process.id}>
      <div class="col m-0 row justify-content-center">
        <div class="card h-100 w-50">
          <div class="card-body pb-0">
            <div class="row mb-2">
              <div class="col W-50">
                <h3> PROCESO {process.id} </h3>{" "}
                <p class = "">
                  Triangulo: {process.input}
                </p>
                <p>
                  Suma Mínima: {process.output}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Process.propTypes = {
  process: PropTypes.object,
};

export default Process;