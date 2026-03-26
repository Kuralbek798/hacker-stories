import Item from "./Item";




const List = ({array }) =>{
const totalComents = array.reduce((acc, curr) => acc + curr.num_comments,0);
console.log(totalComents);
const elementQuantity = Object.keys(array[0]).length
console.log('elementQuantity: ' + elementQuantity);
   return( <div>
    
         <ul>
          {            
           array.map((e) =>(
            <Item key={e.objectID} element = {e}/>
           ))
         //  array.filter((e) =>(e.title == "React"))
         //  .map((e) =>(
         //    <Item key = {e.objectID} element = {e} />
         //  ))        
        
         }      
      </ul>
        {totalComents > 0 && <p><hr />{'total coments: ' + totalComents}</p> }
       
    </div>);
}

export default List;