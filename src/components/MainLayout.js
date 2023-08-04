import ExpenseImage from '../img/m1.png';
import FormLayout from './FormLayout';
import Header from './Header';
import Table from './Table';
function MainLayout() {
return( <div className="container mt-5">
<div className="row">
  <div className="col-sm-6">
    <img src={ExpenseImage} className="img-fluid" alt=""/>
  </div>
  <div className="col-sm-6 mt-5">
   <Header/>
    <FormLayout></FormLayout>
  </div>

</div>

<Table></Table>

</div>
);
} 
export default MainLayout;