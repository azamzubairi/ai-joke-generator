"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderIcon, Wand2Icon } from "lucide-react";
import { generateJokeWithAI } from "@/lib/openai";
import { toast } from "sonner";
import type { GeneratedJoke, JokeParameters } from "@/lib/types";

const topics = [
  "Work",
  "People",
  "Animals",
  "Food",
  "Television",
  "Technology",
  "Sports",
];

const tones = [
  "Witty",
  "Sarcastic",
  "Silly",
  "Dark",
  "Goofy",
  "Clean",
  "Clever",
];

const types = [
  "Pun",
  "Knock-knock",
  "Story",
  "One-liner",
  "Wordplay",
  "Observational",
];

interface JokeGeneratorProps {
  onJokeGenerated: (joke: GeneratedJoke) => void;
}

export function JokeGenerator({ onJokeGenerated }: JokeGeneratorProps) {
  const [loading, setLoading] = useState(false);
  const [parameters, setParameters] = useState<JokeParameters>({
    topic: "Technology",
    tone: "Witty",
    type: "Pun",
    temperature: 0.7,
  });

  const generateJoke = async () => {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      toast.error("OpenAI API key is not configured");
      return;
    }

    setLoading(true);
    try {
      const result = await generateJokeWithAI(parameters);
      onJokeGenerated(result);
    } catch (error) {
      toast.error("Failed to generate joke. Please try again.");
      console.error("Error generating joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Topic</label>
          <Select
            value={parameters.topic}
            onValueChange={(topic) =>
              setParameters((prev) => ({ ...prev, topic }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Tone</label>
          <Select
            value={parameters.tone}
            onValueChange={(tone) =>
              setParameters((prev) => ({ ...prev, tone }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {tones.map((tone) => (
                <SelectItem key={tone} value={tone}>
                  {tone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <Select
            value={parameters.type}
            onValueChange={(type) =>
              setParameters((prev) => ({ ...prev, type }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Creativity (Temperature): {parameters.temperature}
          </label>
          <Slider
            value={[parameters.temperature * 100]}
            onValueChange={([value]) =>
              setParameters((prev) => ({
                ...prev,
                temperature: value / 100,
              }))
            }
          />
        </div>
      </div>

      <Button
        className="w-full"
        size="lg"
        onClick={generateJoke}
        disabled={loading}
      >
        {loading ? (
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2Icon className="mr-2 h-4 w-4" />
        )}
        Generate Joke
      </Button>
    </Card>
  );
}