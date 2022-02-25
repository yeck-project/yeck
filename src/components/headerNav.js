import React, { useState } from "react";

export default function HeaderNav() {
  const handleClickContact = () => {
    var elementContact = document.getElementById("contact");
    elementContact.scrollIntoView({ behavior: 'smooth', block: 'end'});
  };


  return (
<>
  <nav>
    <div class="container flex items-center p-6 mx-auto text-white capitalize text-lg">
        <a onClick={handleClickContact} class="border-b-2 border-transparent transition-colors duration-200 transform hover:border-blue-500 mr-6">Services</a>
        <a href="#project" class="border-b-2 border-transparent transition-colors duration-200 transform hover:border-blue-500 mr-6">Projects</a>
        <a href="#contact" class="border-b-2 border-transparent transition-colors duration-200 transform hover:border-blue-500 mr-6">Contact</a>
    </div>
  </nav>
</>
  )
}