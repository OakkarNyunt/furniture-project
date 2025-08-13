import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function NotFoundPages() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen ">
        <Card className="w-full max-w-sm border-3">
          <CardHeader className="text-center py-8 space-y-4">
            <CardTitle className="text-3xl">404 Not Found.</CardTitle>
            <CardTitle>Something Wrong!</CardTitle>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button className="w-full" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default NotFoundPages;
