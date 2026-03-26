
const Item = ({element}) =>{
     
          return (
            <li>
              <span>
                {
                  <a href={element.url}>{element.title + '  '}</a>
                }
              </span>
              <p>{ ' Author: ' + element.author}</p>
              <p>{' Comments: ' + element.num_comments + '.'}</p>
              <span>{' Points: ' + element.points + '.'}</span>
              <p />
              
            </li>
          );
        
}


export default Item;