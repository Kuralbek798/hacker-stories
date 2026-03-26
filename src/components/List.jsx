import Item from "./Item";




function List({array }){
   return( <div>
         <ul>
          {
           array.map((e) =>(
            <Item key={e.objectID} element = {e}/>
           ))}       
      </ul>
    </div>);
}
export default List;