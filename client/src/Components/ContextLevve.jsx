import { useContext,createContext,useState,useEffect } from "react"
const ContextLeave=createContext();
// using usecontext managing the leaves in real time
export const ProviderLeave=({children})=>{
    // const[Leave,setLeave]=useState([]);

    const [Leave, setLeave]=useState(()=>{
    const storedLeaves=localStorage.getItem("leaves");
    return storedLeaves?JSON.parse(storedLeaves):[];
  });
 
  // save the leave if any updation is done
  useEffect(()=>{
    localStorage.setItem("leaves", JSON.stringify(Leave));
  },[Leave]);

    const applyLeaves=(leaves)=>{
        setLeave(prev=>[...prev,leaves])
    }
    const approveLeaves=(id)=>{
setLeave(prev=>prev.map(p=>p.id===id?{...p,status:"Approved"}:p));
    }
    const rejectLeaves=(id)=>{
setLeave(prev=>prev.map(p=>p.id===id?{...p,status:"Rejected"}:p));
    }
    return (
        <>
        <ContextLeave.Provider value={{Leave,applyLeaves,approveLeaves,rejectLeaves}}>{children}</ContextLeave.Provider>
        </>
    )
}
export const useLeave=()=>useContext(ContextLeave);