import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type SignProps = {
  In?: boolean | undefined;
  Up?: boolean | undefined;
};

export default function Sign({ In, Up }: SignProps) {
  const defaultValue = In ? "in" : "up";

  return (
    <Tabs defaultValue={defaultValue} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="in">Sign In</TabsTrigger>
        <TabsTrigger value="up">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="in">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password" />
            </div>
          </CardContent>  

          <CardFooter>
            <Button>Sign In</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="up">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create a new account</CardDescription>
          </CardHeader>

          <CardContent>
            content
          </CardContent>  

          <CardFooter>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}