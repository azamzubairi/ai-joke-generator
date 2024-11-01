"use client";

import { useState } from "react";
import { JokeGenerator } from "@/components/joke-generator";
import { JokeHistory } from "@/components/joke-history";
import { GradientBackground } from "@/components/gradient-background";
import { LightbulbIcon } from "lucide-react";

export default function Home() {
  const [jokes, setJokes] = useState<Array<{
    joke: string;
    evaluation: {
      funny: number;
      appropriate: number;
      offensive: number;
    };
    parameters: {
      topic: string;
      tone: string;
      type: string;
      temperature: number;
    };
  }>>([]);

  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-3 mb-4">
            <LightbulbIcon className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              AI Joke Generator
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Customize your joke parameters and let AI create the perfect joke for any occasion.
            Our AI will also evaluate the joke's quality and appropriateness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <JokeGenerator
            onJokeGenerated={(joke) => setJokes((prev) => [joke, ...prev])}
          />
          <JokeHistory jokes={jokes} />
        </div>
      </div>
    </main>
  );
}