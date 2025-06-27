import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { DualRangeSlider } from "@/components/ui/range-slider"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
const categoryOptions = ["T-shirts", "Polo", "Jeans", "Shirts"]

const FiltersForm = () => {
  const form = useForm<{
    price: [number, number]
    all: boolean
    categories: string[]
  }>({
    defaultValues: {
      price: [0, 100],
      all: false,
      categories: [],
    },
  })
  const all = form.watch("all")
  const selected = form.watch("categories")

  // Keep 'All' in sync with individual checkboxes
  useEffect(() => {
    const allSelected = selected.length === categoryOptions.length
    if (allSelected && !all) {
      form.setValue("all", true)
    } else if (!allSelected && all) {
      form.setValue("all", false)
    }
  }, [selected, all, form])
  return (
    <Form {...form}>
      <form className="flex gap-7 flex-col">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-10">Price</FormLabel>
              <FormControl>
                <div
                  onPointerDown={(e) => e.stopPropagation()}
                  onPointerMove={(e) => e.stopPropagation()}
                  onPointerUp={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                >
                  <DualRangeSlider
                    label={(value) => value}
                    value={field.value}
                    onValueChange={field.onChange}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4">
          <p className=" font-medium">Category</p>
          <div className="flex flex-col gap-2">
            {/* All */}
            <FormField
              control={form.control}
              name="all"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked)
                        form.setValue(
                          "categories",
                          checked ? categoryOptions : []
                        )
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">All</FormLabel>
                </FormItem>
              )}
            />

            {/* Individual categories */}
            {categoryOptions.map((category) => (
              <FormField
                key={category}
                control={form.control}
                name="categories"
                render={({ field }) => {
                  const isChecked = field.value?.includes(category)
                  return (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) => {
                            const newValues = checked
                              ? [...field.value, category]
                              : field.value.filter((item) => item !== category)
                            field.onChange(newValues)
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {category}
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
            ))}
          </div>
        </div>
      </form>
    </Form>
  )
}

export default FiltersForm
