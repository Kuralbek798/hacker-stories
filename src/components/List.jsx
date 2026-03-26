
function List({list}){
   return( <div>
         <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title + '  '}</a>
              </span>
              <p>{' Author: ' + item.author}</p>
              <p>{' Comments: ' + item.num_comments + '.'}</p>
              <span>{' Points: ' + item.points + '.'}</span>
              <p />
            </li>
          );
        })}
      </ul>
    </div>);
}
export default List;