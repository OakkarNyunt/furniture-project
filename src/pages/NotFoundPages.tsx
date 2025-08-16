import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function NotFoundPages() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 my-8">
        <Card className="w-full max-w-sm border-2 shadow-lg">
          <CardHeader className="text-center py-4 space-y-4">
            <div className="flex justify-center">
              <div className="border border-dashed rounded-full size-24 grid place-items-center text-gray-800">
                <Icons.error className="size-16 text-muted-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl">404 Not Found</CardTitle>
            <CardDescription>
              The page you are looking for doesn’t exist or has been moved.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button className="w-full" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPages;
