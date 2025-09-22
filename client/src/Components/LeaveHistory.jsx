import { Table, Container,} from "react-bootstrap";
import { useLeave } from "./ContextLevve"; // your context
export const LeaveHistory=()=>{
  const {Leave}=useLeave(); // Leave will have all the leaves using useLeave constext
  const currentUser=JSON.parse(localStorage.getItem("currentUser")||"null");
  // leaves one selected employee
  const leaves=currentUser?Leave.filter((lv)=>lv.appliedById===currentUser.id):[];
  return (
    <>
      <h3 className="my-3">My Leaves History</h3>
      {leaves.length===0?(<p>no leaves are there</p>):(
        <Table>
          <thead>
            <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
          <tbody>
            {leaves.map((i)=>(
                  <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.type}</td>
                        <td>{i.startDate}</td>
                        <td>{i.endDate}</td>
                        <td>{i.reason}</td>
                        <td>{i.status}</td>
                  </tr>
            ))}
          </tbody>
        </Table>
      )}
           </>
  );
};
