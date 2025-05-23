import React, {useEffect} from "react"
import {CallLoadEndpoints} from "../../wailsjs/go/main/App";
export default function ListOfEndpoints(){
	useEffect(()=>{
		CallLoadEndpoints().then((res)=>console.log(res))
	},[])
  return(<>
		<h1>testing</h1>
	</>)
}
