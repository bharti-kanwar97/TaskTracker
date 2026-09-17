import {useState} from 'react'
import {itemsPerPage} from '../constants/pagination'
export default function usePagination(tasks){
      //  const itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    
    const reversedTasks = [...tasks].reverse();
   
    const currentTasks = reversedTasks.slice(itemOffset, endOffset);
    
    const pageCount = Math.ceil(reversedTasks.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset =
        (event.selected * itemsPerPage) % reversedTasks.length;
    
      setItemOffset(newOffset);
    };
    const currentPage = Math.floor(itemOffset / itemsPerPage);
    return {currentTasks,handlePageClick,pageCount,currentPage}
}