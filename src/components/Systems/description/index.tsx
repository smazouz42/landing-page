import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react'
const descriptionStyles = cva('text-gray-400 ~text-xs/lg  ~max-w-xl/2xl', {
  variants: {
    position: {
      center: 'text-center',
      right: '',
    },
    
  },
  defaultVariants: {
    position: 'right',
  },
})
type DivProps = React.HTMLAttributes<HTMLDivElement>
export type titlerProps = DivProps & VariantProps<typeof descriptionStyles>
const Description = ({ content, position }: titlerProps) => {
  return (
    
    <h1 className={cn(descriptionStyles({ position }))}>{content}</h1>
  )
}
export { Description }