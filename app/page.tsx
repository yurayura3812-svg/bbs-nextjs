import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@base-ui/react/input";
import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="grid lg:grid-cols-3 gap-4 p-8"> 
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              deploy your project in seconds with our simple and intuitive interface.
            </CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod tempora voluptatibus quia molestiae quasi minima ratione vel culpa laudantium, voluptas ipsam quibusdam, veritatis dicta? Reprehenderit maxime rem porro ut.
          </CardContent>
          <CardFooter className="flex-col gap-2">
          <Link href="#" className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              deploy your project in seconds with our simple and intuitive interface.
            </CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod tempora voluptatibus quia molestiae quasi minima ratione vel culpa laudantium, voluptas ipsam quibusdam, veritatis dicta? Reprehenderit maxime rem porro ut.
          </CardContent>
          <CardFooter className="flex-col gap-2">
          <Link href="#" className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              deploy your project in seconds with our simple and intuitive interface.
            </CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod tempora voluptatibus quia molestiae quasi minima ratione vel culpa laudantium, voluptas ipsam quibusdam, veritatis dicta? Reprehenderit maxime rem porro ut.
          </CardContent>
          <CardFooter className="flex-col gap-2">
          <Link href="#" className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              deploy your project in seconds with our simple and intuitive interface.
            </CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod tempora voluptatibus quia molestiae quasi minima ratione vel culpa laudantium, voluptas ipsam quibusdam, veritatis dicta? Reprehenderit maxime rem porro ut.
          </CardContent>
          <CardFooter className="flex-col gap-2">
          <Link href="#" className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
