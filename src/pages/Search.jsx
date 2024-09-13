import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex mx-auto  border-2 w-[70%] my-16 h-10 justify-between">
      <input className=" outline-none ml-3 bg-transparent w-full" type="search" placeholder="Search for restaurents and food" />
      <CiSearch className="h-full w-8 text-gray-500 " />
    </div>
  )
}

export default Search
