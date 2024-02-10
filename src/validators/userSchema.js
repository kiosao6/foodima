import { z } from "zod";


export const userSchema = z.object({
    search: z.string().min(3, {message: "Search must be at least 3 characters long"}).max(10, {message: "Search can not be longer than 10 characters"} )
})