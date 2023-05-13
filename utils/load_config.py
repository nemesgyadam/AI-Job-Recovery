import os
import yaml


CONFIG_ROOT = "config"


# Load the context for the chat model from a YAML file
def read_yaml(file_path):
    if not file_path.endswith(".yml"):
        file_path += ".yml"
    with open(os.path.join(CONFIG_ROOT, file_path), "r", encoding='utf8') as file:
        data = yaml.safe_load(file)
    return data["context"]