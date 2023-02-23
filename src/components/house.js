import PreJson from "./PreJson";

export default function House() {
  const house = {
    rooms: 3,
    baths: 2,
    sqft: 1500
  }
  return(
    <div>
      <h2>House</h2>
      <PreJson json={house}/>
    </div>
  )
}