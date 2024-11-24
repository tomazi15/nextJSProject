import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="outline" size="lg" className="capitalize m-8">
        click me
      </Button>
    </div>
  );
};

export default HomePage;
