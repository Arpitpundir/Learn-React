import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";
function Accordian(){

  const items = [{
    id: '1',
    label: 'this is label 1',
    content: 'hey what are you doing i am fine by the way'
  },
  {
    id: '2',
    label: 'this is label 2',
    content: 'hey what are you doing i am fine by the way'
  },
  {
    id: '3',
    label: 'this is label 3',
    content: 'hey what are you doing i am fine by the way'
  }]
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    nextIndex === expandedIndex?setExpandedIndex(-1):setExpandedIndex(nextIndex);
  }
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span className="text-4xl">{isExpanded?<GoChevronDown/>:<GoChevronLeft/>}</span>
    return (
      <div key = {item.id}>
        <div onClick = {() => {handleClick(index)}} className="flex px-3 bg-gray-50 border-b items-center cursor-pointer">{item.label}{icon}</div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })
  return <div className = "border-x border-t rounded">
    {renderedItems}
  </div>;
}

export default Accordian;