# AI Joke Generator

A modern web application that generates customized jokes using OpenAI's GPT-4o-mini model. Built with Next.js, TypeScript, and Tailwind CSS.

![AI Joke Generator](https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=2071)

## Features

- 🎯 **Customizable Joke Parameters**
  - Choose from various topics (Work, People, Animals, etc.)
  - Select different tones (Witty, Sarcastic, Silly, etc.)
  - Pick joke types (Pun, Knock-knock, Story, etc.)
  - Adjust creativity level with temperature control

- 🤖 **AI-Powered Generation**
  - Uses OpenAI's GPT-4o-mini model
  - Smart prompt engineering for better results
  - Automatic joke evaluation system

- 📊 **Quality Assessment**
  - Evaluates humor level
  - Checks appropriateness
  - Monitors potential offensive content

- 💫 **Modern UI/UX**
  - Responsive design
  - Beautiful animations
  - Real-time feedback
  - Joke history with scrollable feed

## Tech Stack

- **Frontend Framework**: Next.js 13.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI Integration**: OpenAI API
- **Icons**: Lucide React
- **Toast Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-joke-generator.git
cd ai-joke-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```env
NEXT_PUBLIC_OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Configure Joke Parameters**
   - Select a topic from the dropdown menu
   - Choose the desired tone
   - Pick a joke type
   - Adjust the creativity slider

2. **Generate Joke**
   - Click the "Generate Joke" button
   - Wait for the AI to create and evaluate the joke

3. **View Results**
   - Read the generated joke
   - Check the evaluation metrics
   - Browse previous jokes in the history section

## Project Structure

```
ai-joke-generator/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── gradient-background.tsx
│   ├── joke-generator.tsx
│   ├── joke-history.tsx
│   └── ui/
├── lib/
│   ├── openai.ts
│   ├── types.ts
│   └── utils.ts
└── public/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the GPT-3.5 API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Next.js](https://nextjs.org/) for the awesome framework
