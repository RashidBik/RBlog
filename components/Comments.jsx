// import React, { useState, useEffect, useRef } from 'react'
// import { submitComment } from '../services';



// const Comments = ({slug}) => {
//     const [error, setError] = useState(false);
//     const [localStorage, setLocalStorage] = useState(null);
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [commentEl, nameEl, emailEl, storeDataEl] = useRef();
// useEffect(() => {
//   nameEl.current.value = window.localStorage.getItem('name');
//   emailEl.current.value = window.localStorage.getItem('email');
// }, [input]);   
//     const handleCommentSubmition = () => {
//          setError(false);
//          const {value: comment} = commentEl.current;
//          const {value: name} = nameEl.current;
//          const {value: email} = emailEl.current;
//          const {checked: storeData} = storeDataEl.current;

//   if (!comment || !name || !email) {
//     setError(true);
//     return;
//   }
//   const commentObj = { name, email, comment, }
//   if(storeData){
//     Window.localStorage.setItem('name',name)
//     Window.localStorage.setItem('email',email)
//   }else{
//     Window.localStorage.removeItem('name',name)
//     Window.localStorage.removeItem('email',email)
//   }
//   submitComment(commentObj)
//   .then((res) => {
//     setShowSuccessMessage(true);
//     setTimeout(()=>{
//       setShowSuccessMessage(false)
//     },3000)
//   })
// }
// return (
//     <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
//       <h3 className='text-xl mb-8 font-semibold pb-4 border-b'>Comments Form</h3>
//       <div className='grid grid-cols-1 gap-4 mb-4'>
//         <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700'
//         placeholder='Comment'
//         name='comment'
//         >
//         </textarea>
//       </div>
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
//         <input type="text" ref={nameEl}
//         className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700"
//         placeholder='Name'
//         name='name'
//         />
//       </div>
//       <div className='grid grid-cols-1 gap-4 mb-4'>
//       <input type="text" ref={emailEl}
//         className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700"
//         placeholder='Email'
//         name='email'
//         />
//       </div>
//       <div className='grid grid-cols-1 gap-4 mb-4'>
//         <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value='true' />
//         <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save my name and e-mail for the first time I comment.</label>
//       </div>
//       {error && <p className='text-xs text-red-500'>All fields are required</p>}
//       <div className='mt-8'>
//         <button 
//         className='transation duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer '
//         type='button' 
//         onClick={handleCommentSubmition}>
//             Post Comment
//         </button>
//         {showSuccessMessage && <span className='text-xl float-right font-semibold text-green-500 mt-3'>Comment Submitted for review</span>}
//       </div>
//     </div>
//   )
// }

// export default Comments
