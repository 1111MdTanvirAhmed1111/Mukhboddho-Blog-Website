'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

function BreadCrumb(props) {
    const path = usePathname()
    console.log(path)

    const pathArr = path.split("/").filter((item) => item !== "")
    console.log(pathArr)
  return (
   <Breadcrumb className={`my-3 mx-4  ${props.className}`}>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
   
    {pathArr.map((item, index) => (

      <BreadcrumbItem key={index}>
       <BreadcrumbSeparator />
        <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
        
      </BreadcrumbItem> ))}
  </BreadcrumbList>
</Breadcrumb>
  )
}

export default BreadCrumb