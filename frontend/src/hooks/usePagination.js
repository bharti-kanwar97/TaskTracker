import {useState,useEffect} from 'react'
import {itemsPerPage} from '../constants/pagination'
export default function usePagination(tasks){
      //  const itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);
    // Reset to first page whenever tasks change
  useEffect(() => {
    setItemOffset(0);
  }, [tasks]);
    const endOffset = itemOffset + itemsPerPage;
    
    const reversedTasks = [...tasks].reverse();
   
    const currentTasks = reversedTasks.slice(itemOffset, endOffset);
    
    const pageCount = Math.ceil(reversedTasks.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset =
        (event.selected * itemsPerPage) % reversedTasks.length;
    
      setItemOffset(newOffset);
    };
    return {currentTasks,handlePageClick,pageCount}
}