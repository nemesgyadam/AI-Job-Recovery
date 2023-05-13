import os
import yaml
import openai
import argparse

from utils.load_config import read_yaml


openai.api_key = os.getenv("OPENAI_API_KEY")
CONFIG_ROOT = "config"



def get_completion_from_messages(messages):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature,  # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]


def collect_messages(prompt, context):
    context.append({"role": "user", "content": f"{prompt}"})
    response = get_completion_from_messages(context)
    context.append({"role": "assistant", "content": f"{response}"})
    return response


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


def main() -> None:
    args = parse_args()
    context = read_yaml(args.config)

    while 1:
        prmp = input("You: ")
        response = collect_messages(prmp, context)
        print(f"{args.Agent}: {response}")


if __name__ == "__main__":
    main()
