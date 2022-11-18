/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const ProcessFormView = ({ process= {}, users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Process</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={process}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* User */}
            <div class="form-group">
            <div>
            <label class="input-label">User</label>
            <Field as="select" name="user.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Input */}
            <div class="form-group">
            <label class="input-label">Input</label>
            <Field type="text" name="input"
              class="form-control" />
            </div>
            {/* K */}
            <div class="form-group">
            <label class="input-label">K</label>
            <Field type="number" name="k"
              class="form-control" />
            </div>
            {/* Output */}
            <div class="form-group">
            <label class="input-label">Output</label>
            <Field type="number" name="output"
              class="form-control" />
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

ProcessFormView.propTypes = {
  process: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ProcessFormView;