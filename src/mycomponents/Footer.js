import React from 'react'
// import './Footer.css'

export default function Footer() {
    let fs={
        position:"relative",
        top:"100vh",
        width:"100%"
    }
    return (
        <div>
         <footer className="bg-dark text-light py-1" style={fs}>
             <p className="text-center">
                Copyright &copy; ashabb
             </p>
         </footer>
        </div>
    )
}
