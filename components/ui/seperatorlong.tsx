"use client"

import * as React from "react"
import * as SeparatorLongPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const SeparatorLong = React.forwardRef<
  React.ElementRef<typeof SeparatorLongPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorLongPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorLongPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
SeparatorLong.displayName = SeparatorLongPrimitive.Root.displayName

export { SeparatorLong }