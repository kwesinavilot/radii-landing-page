"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="ms-auto hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              FAQs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}>
              Contacts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent bg-white`} style={{color: '#F27405', borderRadius: '20px'}}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
