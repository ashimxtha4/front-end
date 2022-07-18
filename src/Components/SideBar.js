// import React from 'react'

// function SideBar({children}) {
//     const menuItem = [
//       {
//         path:"/",
//         name:"",
//         icon: "icon"
//       },
//       {
//         path:"/",
//         name:"",
//         icon: "icon"
//       },
//       {
//         path:"/",
//         name:"",
//         icon: "icon"
//       },
//       {
//         path:"/",
//         name:"",
//         icon: "icon"
//       },
//       {
//         path:"/",
//         name:"",
//         icon: "icon"
//       }
//     ]
//   return (
//     <>
//         <div className='SideBar-div'>
//             <div className='top-section'>
//               <h1 className='logo'>LOGO</h1>
//               <div className='bars'>
//                 <FaBars />
//               </div>
//             </div>
//             {
//               menuItem.map((item,index) => (
//               <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                 <div className='icon'>{item.icon}</div>
//                 <div className='link-text'>{item.name}</div>
//               </NavLink>
//               ))
//             }
//         </div>
//         <main>{children}</main>
//     </>
//   )
// }

// export default SideBar