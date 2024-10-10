import React, {useEffect, useState} from 'react';

const SelectBox = ({arrayDt=[],setPositon,position}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setPositon(event.target.value);
    };
   useEffect(()=>{
       if(position!=null && position!=undefined){
           setSelectedValue(position)
       }
   },[position,arrayDt])
    return (
        <div>
            <select
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedValue}
                onChange={handleChange}
                aria-placeholder={'Vị trí công việc'}
            >
                <option value="" disabled={true} hidden={true}>Vị trí công việc</option>
                {
                    arrayDt.map(i=>  <option key={i.id} value={i.id}>{i.viTriTuyenDung}</option>)
                }
            </select>
            {/*{selectedValue && (*/}
            {/*    <div className="mt-2 text-sm text-gray-600">*/}
            {/*        Selected: {selectedValue}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default SelectBox;
