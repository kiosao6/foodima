import { CheckboxReactHookFormMultiple } from "/src/Components/Checkbox"




export const Sidebar = ({display = 'hidden'}) => {
  const classes = `max-w-[24rem] mx-auto w-full px-6 lg:px-0 ${display} lg:block lg:col-span-2 lg:mr-6 lg:mx-0 lg:max-w-[17rem]`
  return (
    <div className={classes}>
        <CheckboxReactHookFormMultiple/>
    </div>
  )
}