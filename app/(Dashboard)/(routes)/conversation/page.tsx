"use client"

import { Heading } from "@/components/Heading"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { formSchema } from "./constant";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Conversationpage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

    } catch (error: any) {

    }
  }

  return (
    <div>
      <Heading title={"Conversation"} description={"Our Most advanced conversation model."} icon={MessageSquare}
        iconColor={"text-violet-500"}
        bgColor={"bg-violet-500/10"}
      />
      <div className="lg:px-8 px-4">
        <div >
          <Form {...form} >
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="px-4 p-3  md:px-6 
              focus-within:shadow-sm rounded-lg border w-full grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="mb-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do i calculate the radius if the circle"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading}>Generate</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Conversationpage