// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <h1>Vite + React</h1>
//     </>
//   )
// }

// export default App

// function MyButton(){
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
// export default function MyApp(){
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton></MyButton>
//     </div>
//   )
// }

const user={
      name: 'Hedy Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
}

export default function Profile(){
  return (
    <>
    <h1>{user.name}</h1>
    <img className="avatar" 
    src={user.imageUrl}
    alt={'Photo of'+ user.name}
    />

    
    </>
  )
}
