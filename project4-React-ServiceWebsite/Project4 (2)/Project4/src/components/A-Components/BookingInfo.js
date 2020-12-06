import React, { useEffect, useState } from "react";

const BookingInfo = (props) => {
  // extract language from props
  const lang = props.lang;
  // use state for variables coming from an api
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  // const [inventor, setInventor] = useState("");

  // simulate an api call
  const fetchContent = () => {
    switch (lang) {
      case "Wep-App-Development":
        setTitle("Wep App Development");
        setDetails(`Detailed information about the Wep App Developmetn.`);
        sessionStorage.setItem("Service", "Wep App Development");
        // setInventor("Brendan Eich");
        break;
      case "Mobile-App-Development":
        setTitle("Mobile App Development");
        setDetails(
          "Detailed information about the Mobile App Development language."
        );
        // setInventor("James Gosling");
        sessionStorage.setItem("Service", "Mobile App Development");
        break;
      case "Complete-software-development-outsourcing":
        setTitle("Complete software development outsourcing");
        setDetails(
          "Shouldering complete software development project pipeline or its part of mid and large enterprises to support their business growth"
        );
        // setInventor("Guido van Rossum");
        sessionStorage.setItem(
          "Service",
          "Complete software development outsourcing"
        );
        break;
      case "Software-support-and-evolution":
        setTitle("Software support and evolution");
        setDetails(
          "A broad set of services – help desk & support, cloud migration, legacy reengineering, and more – to keep your business-critical applications healthy and stable."
        );
        // setInventor("Guido van Rossum");
        sessionStorage.setItem("Service", "Software support and evolution");
        break;
      case "Software-Consulting":
        setTitle("Software Consulting");
        setDetails(
          "A holistic set of consulting services for both new and ongoing software development projects – from ideation and feasibility study to implementation strategy."
        );
        // setInventor("Guido van Rossum");
        break;
      case "Development-team-augmentation":
        setTitle("Development team augmentation");
        setDetails(
          "More than 54 IT specilists to help you handle the lack of your internal resources and capabilities."
        );
        sessionStorage.setItem("Service", "Development team augmentation");
        // setInventor("Guido van Rossum");
        break;
      default:
        setTitle("n/a");
        setDetails("n/a");
        // setInventor("n/a");
        break;
    }
  };

  // use to fetch data when component mounts
  useEffect(() => {
    fetchContent();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ul>
        <li>
          <h1>{Title}</h1>
        </li>
        <li>
          <h5>{Details}</h5>
        </li>
        {/* <li>
          Published in: <b>{year}</b>
        </li> */}
      </ul>
    </>
  );
};

export default BookingInfo;
