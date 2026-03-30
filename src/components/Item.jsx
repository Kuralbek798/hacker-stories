
const Item = ({url, title,author, num_comments,points} ) =>(
               
            <li>
              <span>
                {
                  <a href={url}>{title + '  '}</a>
                }
              </span>
              <p>{ ' Author: ' + author}</p>
              <p>{' Comments: ' + num_comments + '.'}</p>
              <span>{' Points: ' + points + '.'}</span>
              <p />              
            </li>        
        
        );

export default Item;