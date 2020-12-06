//import Form from "../S-Component/Weather/Form"

function getCardSettings() {
  const Name = sessionStorage.getItem("Name");
  const Eamil = sessionStorage.getItem("Eamil");
  const Phone = sessionStorage.getItem("Phone");
  const Service = sessionStorage.getItem("Service");
  return [
    {
      Caption: "Basic Information",
      Label1: "Name",
      Label1_Ans: Name,
      Label2: "Email",
      Label2_Ans: Eamil,
      Label3: "Phone",
      Label3_Ans: Phone,
      Label4: "PassWord",
      Label4_Ans: " ",
    },

    {
      Caption: "Additional Information",
      Label1: "Company Name",
      Label1_Ans: "Add Company",
      Label2: "Service You Picked",
      Label2_Ans: Service,
      Label3: "Role",
      Label3_Ans: "Add Role",
      Label4: "Website",
      Label4_Ans: "Add Website",
    },
  ];
}

export { getCardSettings };
