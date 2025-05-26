import {useState} from "react";
import ListOfEndpoints from "./components/ListOfEndpoints";
import NewEndPoint from "./components/NewEndPoint";

export default function App(){

	const [refreshList,setRefreshList]=useState(0)

	return(<>
				<ListOfEndpoints refreshList={refreshList} setRefreshList={setRefreshList} ></ListOfEndpoints>
		  <NewEndPoint setRefreshList={setRefreshList} ></NewEndPoint>
	</>)
}
