export default(props)=>{
    console.log(props)
    console.log(props.min)
    console.log(props.max)
    return <h2> {props.max} é maior que o {props.min}</h2>
}