import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select"
 
export function SelectDemo({ children = [], label = "", placeholder = "", defaultValue = "" }) {


  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>

          {children.map((child) => (

            <SelectItem key={child} value={child}>{child}</SelectItem>

          ) )}

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}