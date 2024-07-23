import * as React from "react"

import { cn } from "@/lib/utils"

const Pcard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-pcard text-pcard-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Pcard.displayName = "Pcard"

const PcardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto font-rubik flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
PcardHeader.displayName = "CardHeader"

const PcardPreTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    style={{ color: '#1D1D1D' }}
    className={cn("mx-auto font-rubik flex items-center p-6 pt-0 font-bold", className)}
    {...props}
  />
))
PcardPreTitle.displayName = "PcardPreTitle"

const PcardPreTitle2 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    style={{ color: '#1D1D1D' }}
    className={cn("mx-auto font-rubik flex items-center text-sm text-muted-foreground", className)}
    {...props}
  />
))
PcardPreTitle2.displayName = "PcardPreTitle2"

const PcardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    style={{ color: '#038C7F' }}
    className={cn(
      "mx-auto font-volkhov flex items-center text-4xl font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
PcardTitle.displayName = "PcardTitle"

const PcardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mx-auto font-rubik flex items-center text-sm text-muted-foreground", className)}
    {...props}
  />
))
PcardDescription.displayName = "PcardDescription"

const PcardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    style={{ color: '#1D1D1D' }}
    className={cn("font-rubik flex items-center text-sm text-muted-foreground space-y-6", className)}
    {...props} />
))
PcardContent.displayName = "PcardContent"

const PcardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto font-rubik flex items-center text-sm", className)}
    {...props}
  />
))
PcardFooter.displayName = "PcardFooter"



export { Pcard, PcardHeader, PcardFooter, PcardPreTitle, PcardPreTitle2, PcardTitle, PcardDescription, PcardContent }
