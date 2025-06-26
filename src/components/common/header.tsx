"use client"

import { logo } from "@/assets"
import { Button } from "@/components/ui/button"
import { getSession } from "@/utils/get-session"
import { Menu, MoveRight, Search, ShoppingCart, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
  ]

  const [isOpen, setOpen] = useState(false)
  const isAuthenticated = !!getSession()?.token

  return (
    <header className="w-full z-10 fixed top-0 left-0 bg-background border-b">
      <div className="container relative mx-auto py-4 flex gap-2 flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-16 px-4 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <img alt="logo" src={logo} className="shrink-0 w-20" />
          <Link to={"/"}>
            <Button className="rounded-sm max-md:hidden" variant="ghost">
              Products
            </Button>
          </Link>

          <Button className="rounded-sm max-md:hidden">
            Sell Your Product
          </Button>
        </div>
        <div className="flex justify-end w-full gap-3">
          <Link to={"/"}>
            <Button size={"icon"} variant="ghost" className=" rounded-sm">
              <Search className="size-5" />
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button size={"icon"} variant="ghost" className=" rounded-sm">
              <ShoppingCart className="size-5" />
            </Button>
          </Link>
          {isAuthenticated ? (
            <Button variant={"outline"} className="rounded-sm">
              logout
            </Button>
          ) : (
            <Link to={"/auth/login"}>
              <Button className="rounded-sm">login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
