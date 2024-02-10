import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "/components/ui/button"
import { Checkbox } from "/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "/components/ui/form"
import { useStore } from "../Store/store"
import { useEffect, useState } from "react"

 
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})


export function CheckboxReactHookFormMultipleMobile({action}) {
  const { recipes, setRecipes, categories, originalRecipes, setSavedFilters, savedFilters } = useStore();
  
  const [selectedFilters, setSelectedFilters] = useState([...savedFilters]);
  const [filteredItems, setFilteredItems] = useState([...recipes]);
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        items: [...savedFilters],
      },
    })
  
    

    const updatedCategories = [...categories]
    const newRecipes = [...recipes];
    
    
    
    const change = () => {
      form.reset({ items: [] });
      action()
      setTimeout(() => {
        setSelectedFilters([])
        if(savedFilters.length === 0){
          console.log('if hola');
          return;
        } else {
            console.log('Else');
            setSavedFilters([])
            setRecipes([...originalRecipes])
          }
        }, 0);
        console.log('ejecutado')
    }
    


    useEffect(() => {
      console.log(selectedFilters)
    }, [selectedFilters])
    


    const onFilterRecipes = (recipes) => {
      
      if(selectedFilters.includes(recipes)){
        let filters = selectedFilters.filter( item => item !== recipes)
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, recipes]);
      }

    };

    const filterItems = () => {
      if (selectedFilters.length > 0) {
        const tempItems = originalRecipes.filter(item => selectedFilters.includes(item.strCategory));

        setFilteredItems(tempItems);
        setRecipes([...tempItems]);
      } else if(selectedFilters.length === 0) {
        setRecipes([...originalRecipes])
        setSavedFilters([])
        return;
      } else {
        setFilteredItems([...originalRecipes]);
        setRecipes([...originalRecipes])
      }
      
      
    };

    const onClickButton  = () => {
        filterItems()
        action()
        if(selectedFilters.length === 0){
            return;
        } else {

          setSavedFilters([...selectedFilters])
        }
    }
    

  return (
    
    <Form {...form}>
        <div className="flex justify-between items-center mb-4">
            <p className="text-xl text-dark tracking-tight font-semibold">Filter by:</p>
            <button onClick={() => change()} className="text-xs text-sandia font-medium">Clear filter</button>
        </div>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="flex flex-col pointer-events-none space-y-0 gap-3">
              
              {updatedCategories?.map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        type="button"
                        onClick={(e) => {
                          onFilterRecipes(item)
                        }} 
                        key={index}
                        className="flex text-dark flex-row-reverse justify-between items-center space-y-0"
                      >
                        <FormControl>
                        <Checkbox
                            className="pointer-events-auto"
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter((value) => value !== item)
                                  );
                            }}
                        />
                          
                        </FormControl>
                        <FormLabel

                        onClick={(e) => {
                          e.stopPropagation();
                        }} 
                        
                        
                        className="font-normal pointer-events-auto text-zinc-500 tracking-tigh t text-sm">
                          {item}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={!recipes.length} onClick={onClickButton} className="py-6 !mb-12 w-full" type="button">Filter</Button>
      </form>
    </Form>
  )
}