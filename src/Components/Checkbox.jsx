import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
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


export function CheckboxReactHookFormMultiple() {
  
  const { recipes, setRecipes, categories, originalRecipes, savedFilters, setSavedFilters } = useStore();
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
      setTimeout(() => {
          setRecipes([...originalRecipes])
          setSelectedFilters([])
          setSavedFilters([])
          
        }, 0);
    }
    

    const [selectedFilters, setSelectedFilters] = useState([...savedFilters]);
    const [filteredItems, setFilteredItems] = useState([...recipes]);


    const onFilterRecipes = (recipes) => {
      
      if(selectedFilters.includes(recipes)){
        let filters = selectedFilters.filter( item => item !== recipes)
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, recipes]);
      }

    };

    useEffect(() => {
      filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
      if (selectedFilters.length > 0) {
        const tempItems = originalRecipes.filter(item => selectedFilters.includes(item.strCategory));
        setSavedFilters([...selectedFilters])
        setFilteredItems(tempItems);
        setRecipes([...tempItems]);
      } else {
        setSavedFilters([...selectedFilters])
        setFilteredItems([...originalRecipes]);
        setRecipes([...originalRecipes])
      }
    };
    

  return (
    
    <Form {...form}>
        <div className="flex justify-between items-center mb-4">
            <p className="text-xl text-dark tracking-tight font-semibold">Filter by:</p>
            <button onClick={() => change()} className="text-xs text-sandia font-semibold">Clear filter</button>
        </div>
      <form className="space-y-8">
        <FormField
          name="items"
          render={() => (
            <FormItem className="flex flex-col space-y-0 gap-3">
              
              {updatedCategories?.map((item, index) => (
                <FormField
                  key={index}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        type="button"
                        onClick={() => onFilterRecipes(item)}
                        key={index}
                        className="flex text-dark pointer-events-none flex-row-reverse justify-between items-center space-y-0"
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
                         className="font-normal pointer-events-auto cursor-pointer text-zinc-500 tracking-tigh t text-sm">
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
      </form>
    </Form>
  )
}