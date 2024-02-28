import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Userdata = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: null,
  });

  useEffect(() => {
    const fetchusers = async () => {
      try {
        setState({ ...state, loading: true });
        const response = await axios.get(
          "https://randomuser.me/api?results=10"
        );
        let { results } = response.data;
        setState({
          ...state,
          loading: false,
          users: results,
        });
      } catch (error) {
        setState({
          ...state,
          errorMessage: error,
        });
      }
    };
    fetchusers();
  }, []);

  let displaySno = (rowData) => {
    return rowData.login.uuid.substring(0, 5);
  };

  let displayName = (rowData) => {
    return (
      <span>
        {rowData.name.title}. {rowData.name.first} {rowData.name.last}
      </span>
    );
  };

  let displayImage = (rowData) => {
    return <img src={rowData.picture.thumbnail} alt="" />;
  };

  return (
    <>
      <div className="grid">
        <div className="col">
          <DataTable value={state.users}>
            <Column header={"SNO"} field="login.uuid" body={displaySno} />
            <Column
              header={"Image"}
              field="picture.thumbnail"
              body={displayImage}
            />
            <Column header={"Name"} field="name" body={displayName} />
            <Column sortable header={"Age"} field="dob.age" />
            <Column header={"Email"} field="email" />
            <Column sortable header={"City"} field="location.city" />
            <Column sortable header={"State"} field="location.state" />
            <Column sortable header={"Country"} field="location.country" />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default Userdata;
