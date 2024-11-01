export interface JokeParameters {
  topic: string;
  tone: string;
  type: string;
  temperature: number;
}

export interface JokeEvaluation {
  funny: number;
  appropriate: number;
  offensive: number;
}

export interface GeneratedJoke {
  joke: string;
  evaluation: JokeEvaluation;
  parameters: JokeParameters;
}