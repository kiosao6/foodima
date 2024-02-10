
import { Skeleton } from "/components/ui/skeleton"
 
export function SkeletonRecipe() {
  return (
    <>
    <div className="max-w-xs lg:max-w-[22rem] mx-auto sm:mx-0 rounded-3xl">

        <Skeleton className="mb-6 h-52 w-72 bg-zinc-200 rounded-3xl">

        </Skeleton>

      <div className="flex flex-col">
        <Skeleton className="mb-1 h-4 rounded-full max-w-[16rem]"></Skeleton>
        <Skeleton className="bg-zinc-200 mr-auto my-2 py-2 px-16 rounded-full"></Skeleton>
      </div>

    </div>
    </>
  )
}