import TableForm from "../components/chefComp/TableForm";

async function addTableData(data) {
  const response = await fetch(
    "https://rms34-bbdf8-default-rtdb.firebaseio.com/TableData.json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        //dont need to set this as firbase handle this automatically but some of database dont
        "Content-Type": "application/json",
      },
    }
  );

  const data2 = await response.json();
  console.log(data2);
}
const Chefs = () => {
  return (
    <div>
      <TableForm onAddData={addTableData} />
    </div>
  );
};
export default Chefs;
