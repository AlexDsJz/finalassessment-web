import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import View from "components/FormPost.view";

function ProcessFormPost({ onCompleted = () => null, onError = () => null }) {
  const reqUsers = useQuery(`{ 
        users { 
        } 
    }`);
  const [callResults, reqResults] = usePost("/processes/execute", {
    onCompleted: () => 
        window.location.href = "/results"
  });

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "ERROR";

  const { users = [] } = reqUsers.data;
  const error = reqResults.error ? "La cadena no debe de llevar espacio después del punto y coma" : null;

  const onSubmit = (values) => {
    callResults(values);
  };

  return <View 
          users={users} error={error}     
          onSubmit={onSubmit} 
        />;
}

ProcessFormPost.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
};

export default ProcessFormPost;