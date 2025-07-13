import { IoSparklesOutline } from "react-icons/io5";
import Container from "../../components/container/Container.tsx"
import { FaRegLightbulb } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const AIAssistantPage = () => {
  return <div className={"grid mt-5 grid-cols-12 gap-5"}>
    <div className={"col-span-12"}>
      <div className={"flex items-center gap-3"}>
        <IoSparklesOutline className={"text-3xl font-bold"} />
        <div className={"flex flex-col"}>
          <h1 className={"text-3xl font-bold"}>AI Recipe Asistant</h1>
          <p className={"text-gray-600"}>Get personalized recipe help powered by AI</p>
        </div>
      </div>
    </div>
    <div className={"col-span-6"}>
      <Container title={"Recipe Suggestion"} subtitle={"Get recipe ideas based on ingredients you have available"} body={
        <div className={"grid grid-cols-12 mt-10"}>
          <div className={"col-span-12"}>
            <div className={"flex flex-col"}>
              <label className={"text-sm font-semibold"}>Recipe prompt</label>
              <textarea rows="5" className={"border-1 border-gray-200 rounded-md p-2"} placeholder="List your available ingredients (e.g., chicken breast, broccoli, rice, garlic, onion...)"></textarea>
            </div>
          </div>
          <div className={"col-span-12 mt-5"}>
            <button className={"flex gap-5 w-full items-center justify-center bg-black py-2 px-5 text-white rounded-md"}>
              <FiSend />
              <p className={"text-sm font-semibold"}>Suggest Recipe</p>
            </button>
          </div>
        </div>
      } />
    </div>
    <div className={"col-span-6"}>
      <Container title={"Recipe Suggestion"} subtitle={"Get your recipe result based on your prompt"} body={
        <div className={"grid grid-cols-12 mt-10"}>
          <div className={"col-span-12"}>
            <div className={"flex flex-col items-center justify-center"}>
              <FaRegLightbulb className={"text-5xl text-gray-300"} />
              <p>Your recipe suggestion will appear here</p>
              <small>List your ingredients and click "Suggest Recipe" to get started!</small>
            </div>
          </div>
        </div>
      } />
    </div>
    <div className={"col-span-12"}>
      <Container height={"h-auto"} title={"AI Assistant Tips"} subtitle={"Get more with your prompts!"} body={
        <div className={"grid grid-cols-12 mt-5"}>
          <div className={"col-span-6"}>
            <ul className={"px-5"}>
              <li className={"list-disc"}>Be specific about dietary restrictions or preferences</li>
              <li className={"list-disc"}>Include the complete original recipe for best results</li>
              <li className={"list-disc"}>Mention any ingredients you want to avoid</li>
              <li className={"list-disc"}>Ask for cooking time adjustments if needed</li>
            </ul>
          </div>
          <div className={"col-span-6"}>
            <ul className={"px-5"}>
              <li className={"list-disc"}>List all available ingredients, even basic ones</li>
              <li className={"list-disc"}>Mention your cooking skill level if relevant</li>
              <li className={"list-disc"}>Specify time constraints (quick meal, slow cook, etc.)</li>
              <li className={"list-disc"}>Include any cuisines preferences</li>
            </ul>
          </div>
        </div>
      }>
      </Container>
    </div>
  </div>
}

export default AIAssistantPage
