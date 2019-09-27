import React, {useState, useEffect} from "react";
import {Form, Field, withFormik} from "formik";
import {RequestStyle} from "./Styling/RequestStyling";
import {CardStyle} from "./Styling/CardStyling"
import axios from "axios";



  const PostRequests = ({ errors, touched, values, status }) => {
    const [information, setInformation] = useState([]);
    useEffect(() => {
      if (status) {
        setInformation([status]);
      }
    }, [status]);
  
    return (
      <RequestStyle className="mainstyle">
        <h4>Create a new Post Request</h4>
        <Form className="forms">
          <p>Name:</p>
          <Field className="posts" 
          type="text" 
          name="name"
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
  <p>Meeting place:</p>
  <Field className="posts" component="select" name="meeting">
          <option>Please Choose an Option</option>
          <option value="Adventureland">Adventureland</option>
          <option value="Tomorrowland">Tomorrowland</option>
          <option value="Fantasyland">Fantasyland</option>
          <option value="Mainstreet">Mainstreet</option>
          <option value="New Orleans Square">New Orleans Square</option>
          <option value="Critter Country">Critter Country</option>
          <option value="Mickey's Toon Town">Micker's Toon Town</option>
          <option value="Star Wars: Galaxy's Edge">Star Wars: Galaxy's Edge</option>
          <option value="Frontierland">Frontierland</option>
          
        </Field>
        <p>Date:</p>
          <Field
            className="posts"
            type="date"
            name="date"
          />
          {touched.date && errors.date && (
            <p className="error">{errors.date}</p>
          )}
          <p>Time:</p>
            <Field
            className="posts"
            type="time"
            name="time"
          />
          {touched.time && errors.time && (
            <p className="error">{errors.time}</p>
          )}
          <p>Number of Kids:</p>
            <Field
            className="posts"
            type="number"
            name="kids"
          />
          {touched.kids && errors.kids && (
            <p className="error">{errors.kids}</p>
          )}
  
  
        <button className="btn2">Add</button>
        </Form>
           {information.map(props => {
            
            return (
                <div className="mainstyle">
                    <CardStyle>
                            <div className="headers">
                            <h4>9/28/2019 at 12:01pm</h4>
                            </div>
                            <div className="cardinfo">
                                <p>Name: {props.name}</p>
                                <p>Meeting Place: {props.meeting}</p>
                                <p>Time: {props.time}</p>
                                <p>Number of Kids: {props.kids}</p>
                   
                   <input type="text" placeholder="Ask a question.."/>
                   <button className="btn2">Add</button>
                   </div>
                   </CardStyle>
        
                </div>)
                } 
            )
          
        }
        </RequestStyle>
    )
      }
        
    

const FormikInfo = withFormik({
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
  })(PostRequests); // currying functions in Javascript
  console.log("This is the HOC", FormikInfo);

  export default FormikInfo;


