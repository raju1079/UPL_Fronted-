import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useEffect } from 'react';

const Lessons = (props) => {

   // console.log('l N u', props?.lessonNunits)

    /* group data by lesson id */
      const[groupByLesson,setGroupByLesson]=useState([])
      const[lessons,setLessons] = useState([])
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          var key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }
      useEffect(()=>{
        setGroupByLesson(groupedBy)
        setLessons(props?.lessonsByCourseId)

      },[props,groupedBy,lessons])
      
      var groupedBy = groupBy(props?.lessonNunits, 'lesson_id');
     // console.log('grouped',Object.values(groupByLesson))
   
  return (
    <div className='what-learn '>
        {/* Lessons */}
        <div className="row m-0 units-heading justify-content-center">
                {
                    /* only 6 lessons will display. controlled in backend service limit=6 */
                    lessons?.map((eachLesson,i)=>(
                        <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                            <div className='course-detail-downarrow'>
                                <i className='fa fa-solid fa-arrow-down'></i>
                            </div>
                            <Button variant='contained'> {eachLesson?.lesson_name} </Button>                            
                        </div>
                    ))
                }
        </div>
        <div className="row m-0 justify-content-center">
            
                {
                    /* only 3 cards will display for units will display. controlled in frontend slice */
                    Object.values(groupByLesson).slice(0,6).map((eachLes,evar)=>(
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3" key={evar}>
                            <div className='card-body h-100 '>
                            <div className='course-detail-downarrow'>
                                <i className='fa fa-solid fa-arrow-down'></i>
                            </div>
                            <div className='card-body'>
                                 {/* units as per lessons */}
                                {
                                    /* only 6 units will display. controlled in frontend slice */
                                    eachLes.slice(0,6).map((eachUnit,ind)=>(
                                        <div className="accordion" id="accordionExample" key={eachUnit.unit_id}>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id={`heading${eachUnit.unit_id}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${eachUnit.unit_id}`} aria-expanded="true" aria-controls={`collapse${eachUnit.unit_id}`}>
                                                    {eachUnit.unit_name}
                                                </button>
                                                </h2>
                                                <div id={`collapse${eachUnit.unit_id}`} className="accordion-collapse collapse" aria-labelledby={`heading${eachUnit.unit_id}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {eachUnit.content}
                                                </div>
                                                </div>
                                            </div>                   
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>    
                    ))
                }
          
        </div>
    </div>
  )
}

export default Lessons