function TableRow(props){
    return(<tr>
        <td>{props.title} </td>
        <td> {props.date}</td>
        <td>{props.price} </td>
        <td colSpan="2">{props.description}</td>
        <td className="text-right"><a href="#a" className="delete">
          <i className="fa fa-trash-o" aria-hidden="true"/></a></td>
      </tr>);
}
export default TableRow;