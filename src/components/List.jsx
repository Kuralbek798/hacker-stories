import Item from "./Item";


const List = ({array }) =>{

const totalComents = array.reduce((acc, curr) => acc + curr.num_comments,0);

   return( <div>
    
         <ul>
          {            
           array.map(({objectID, ...item}) =>(
            <Item key={objectID} {...item}/>
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