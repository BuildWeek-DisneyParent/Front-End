import React, {useState, useEffect} from "react";
import {Form, withFormik} from "formik";
import {RequestStyle} from "./Styling/RequestStyling";
import RequestCard from "./RequestCard";
import axios from "axios";
// import * as Yup from "yup";

const PostRequest= ({status}) => {
    const [information, setInfo] = useState([])
    useEffect(()=> {
        if (status) {
            setInfo([status]);
        }
    }, [status]);
    return (
<RequestStyle className="mainstyle">
    <Form className="forms">
        <h4>Create a new Post Request</h4>
        <p>Name:</p>
        <input className="posts" type="text"/>
        <p>Meeting Place/Ride:</p>
        <input className="posts" type="text"/>
        <p>Date:</p>
        <input className="posts" type="date"/>
        <p>Time:</p>
        <input className="posts" type="time"/>
        <p>Number of Kids:</p>
        <input className="posts" type="number"/>
        <div className="buttons">
        <button className="normal" type="submit">Add</button>
        </div>
    </Form>

    {information.map(info => (
        <RequestCard 
        key={info.id}
        name={info.name}
        meeting={info.meeting}
        date={info.date}
        time={info.time}
        kids={info.kids}
         />
    ))}
</RequestStyle>
    )
}

const FormikInfo = withFormik({
    // object destructuring. We could do values.species but we are destructuring it so we can just put species. You see the same thing in Props a lot so instead of props.values you would see {values}
    mapPropsToValues({ id, name, meeting, date, time, kids }) {
      return {
        id: id || "",
        name: name || "",
        meeting: meeting || "",
        date: date || "",
        time: time || "",
        kids: kids || ""
      };
    },
  
    // validationSchema: Yup.object().shape({
    //   species: Yup.string().required("You silly!!!"),
    //   size: Yup.string().required(),
    //   notes: Yup.string(),
    //   diet: Yup.string()
    //     .oneOf(["omnivore", "carnivore", "herbivore"])
    //     .required("Please pick a diet type")
    // }),
  
    handleSubmit(values, { setStatus }) {
      axios
        // values is our object with all our data on it.
        .post("https://reqres.in/api/users/", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
  })(PostRequest); // currying functions in Javascript
  console.log("This is the HOC", FormikInfo);
  export default FormikInfo;


