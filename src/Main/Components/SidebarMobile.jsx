import { CheckboxReactHookFormMultipleMobile } from "/src/Components/CheckboxMobile"




export const SidebarMobile = ({display = 'hidden', action}) => {
  const classes = `max-w-[24rem] overflow-y-auto mx-auto w-full px-6 lg:px-0 ${display} lg:block lg:col-span-2 lg:mr-6 lg:mx-0 lg:max-w-[17rem]`
  return (
    <div className={classes}>
        <h2 className="text-3xl text-dark mb-8 tracking-tight font-semibold">Recipes 👩‍🍳 </h2>
        <CheckboxReactHookFormMultipleMobile action={action}/>
    </div>
  )
}