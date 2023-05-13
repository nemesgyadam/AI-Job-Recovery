import openai
import os
import argparse

from flask import Flask, request, render_template, jsonify

from utils.parser import load_config

# Your OpenAI key and other configuration
openai.api_key = os.getenv("OPENAI_API_KEY")


# Initialize the Flask application
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


# Define the chat function
@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.form["user_input"]
    # Pass the user_input to your chatbot function
    context.append({"role": "user", "content": user_input})

    response = openai.ChatCompletion.create(
        model=model,
        messages=context,
        temperature=temperature,  # this is the degree of randomness of the model's output
    )
    context.append(
        {"role": "assistant", "content": response.choices[0].message["content"]}
    )
    return jsonify(response.choices[0].message["content"])


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Talk with model defined in the config file"
    )
    parser.add_argument("--config", default="dumb.yml", help="Config file")
    parser.add_argument(
        "--model", default="gpt-3.5-turbo", help="Model of the AI assistant"
    )

    parser.add_argument("--temp", default=0, help="Temperatuer of the model")
    args = parser.parse_args()
    args.Agent = args.config.split(".")[0]

    global model
    global temperature

    model = args.model
    temperature = float(args.temp)
    return args


def startup(config):
    print("Starting up...")
    global context
    context = read_yaml(config)


if __name__ == "__main__":
    args = parse_args()
    startup(args.config)
    app.run(debug=True)
