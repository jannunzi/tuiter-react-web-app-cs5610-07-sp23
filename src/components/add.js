import {useParams} from "react-router";
import PreJson from "./PreJson";

export default function Add(
  {
    b = 200,
    a = 100,
  }) {

  const {A, B} = useParams()

  // console.log(params)

  const c = a + b
  const z = parseInt(A) + parseInt(B)

  return(
    <div>
      <h2>Add {a} + {b} = {c}</h2>
      <h2>Add {A} + {B} = {z}</h2>
      {/*<PreJson json={params}/>*/}
    </div>
  )
}