import classes from "./TableForm.module.css";
import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const TableForm = (props) => {
  const daySelect = useRef("");
  const timeSelect = useRef("");
  const fullName = useRef("");
  const phoneNo = useRef("");
  const noOfPersons = useRef("");
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    // Check if any of the fields are empty
    if (
      daySelect.current.value === "" ||
      timeSelect.current.value === "" ||
      fullName.current.value === "" ||
      phoneNo.current.value === "" ||
      noOfPersons.current.value === ""
    ) {
      // Display an alert to the user
      alert("Please enter values for all fields.");
      return; // Stop execution if any field is empty
    }
    const TableData = {
      Day: daySelect.current.value,
      Hour: timeSelect.current.value,
      Name: fullName.current.value,
      cellNo: phoneNo.current.value,
      Amount: noOfPersons.current.value,
    };

    props.onAddData(TableData);
    history.replace("/Order");
  }

  return (
    <React.Fragment>
      <section className={classes.banner}>
        <h2>BOOK YOUR TABLE NOW</h2>
        <div className={classes.cardcontainer}>
          <div className={classes.cardimg}></div>

          <div className={classes.cardcontent}>
            <h3>Reservation</h3>
            <form onSubmit={submitHandler}>
              <div className={classes.formrow}>
                <select name="days" ref={daySelect}>
                  <option value="day-select">Select Day</option>
                  <option value="sunday">Sunday</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>

                <select name="hours" ref={timeSelect}>
                  <option value="hour-select">Select Hour</option>
                  <option value="10">10: 00</option>
                  <option value="10">12: 00</option>
                  <option value="10">14: 00</option>
                  <option value="10">16: 00</option>
                  <option value="10">18: 00</option>
                  <option value="10">20: 00</option>
                  <option value="10">22: 00</option>
                </select>
              </div>

              <div className={classes.formrow}>
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={fullName}
                ></input>
                <input
                  type="text"
                  placeholder="Phone Number"
                  ref={phoneNo}
                ></input>
              </div>

              <div className={classes.formrow}>
                <input
                  type="number"
                  placeholder="How Many Persons?"
                  min="1"
                  ref={noOfPersons}
                ></input>
                <input type="submit" value="BOOK TABLE"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TableForm;
