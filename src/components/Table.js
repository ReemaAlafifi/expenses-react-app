import TableRow from "./TableRow";

function Table (){
    return (<div className="row mt-5 mb-5">
    <div className="custom-card ">
      <table className="table ">
        <thead>
          <tr>
            <th> Title</th>
            <th> Date</th>
            <th>value</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        <TableRow title="Title"date="3/8/2023"price="100" description="desc."/>
         
        </tbody>
      </table>
      
    </div>
  </div>);
}
export default Table;