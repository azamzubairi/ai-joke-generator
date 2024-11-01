"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ClockIcon } from "lucide-react";

export function JokeHistory({ jokes }) {
  if (jokes.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          <ClockIcon className="mx-auto h-12 w-12 mb-3 opacity-50" />
          <p>No jokes generated yet. Try creating one!</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Generated Jokes</h2>
      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-6">
          {jokes.map((joke, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-card"
            >
              <p className="text-lg mb-4">{joke.joke}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Funny</span>
                  <span>{Math.round(joke.evaluation.funny)}%</span>
                </div>
                <Progress value={joke.evaluation.funny} />
                
                <div className="flex items-center justify-between text-sm">
                  <span>Appropriate</span>
                  <span>{Math.round(joke.evaluation.appropriate)}%</span>
                </div>
                <Progress value={joke.evaluation.appropriate} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">{joke.parameters.topic}</Badge>
                <Badge variant="outline">{joke.parameters.tone}</Badge>
                <Badge variant="outline">{joke.parameters.type}</Badge>
                <Badge variant="outline">
                  Temp: {joke.parameters.temperature}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}