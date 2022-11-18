import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ModalRoute } from "seed/helpers";
import PropTypes from "prop-types";
import { PaginationFooter } from "seed/helpers";
import Process from "components/Process"
import FormPost from "components/FormPost"

const Results = ({
  processes,
  pageNum = 1,
  totalPages = 0,
  onClickPage = () => {},
}) => (
  <BrowserRouter basename="/results">
    <div>
      <div class="container w-50 clearfix mb-5 mt-2">
        <Link to="/execute" className="btn btn-outline-primary float-right">
            Ejecutar Proceso
        </Link>
      </div>
      
      {processes.map((process) => Process(process))}
      
      <div class="col m-0 row justify-content-center">
        <PaginationFooter
            totalPages={totalPages}
            onClickPage={onClickPage}
            pageNum={pageNum}
        />
        </div>
    </div>

    <ModalRoute
        path = "/execute"
        component = {FormPost}/>

  </BrowserRouter>
);

Results.propTypes = {
  processes: PropTypes.array,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func,
};

export default Results;