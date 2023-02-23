export default function PreJson({json}) {
  return(
    <pre>
      {JSON.stringify(json, null, 2)}
    </pre>
  )
}