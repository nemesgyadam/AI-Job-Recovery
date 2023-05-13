![Python Version](https://img.shields.io/badge/Python-3.11.0-blue)
![Flask Version](https://img.shields.io/badge/Flask-2.3.2-blue)
![OpenAI Version](https://img.shields.io/badge/OpenAI-0.27.6-blue)

# Hermes - Your AI Assistant

Hermes is an advanced AI assistant created to help people who have lost their job to AI. It's built with OpenAI's GPT-4 and it can be used as a console application or via a web interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Python 3.6 or later
- An OpenAI API key

### Installing

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/hermes.git
    ```
2. Enter the project directory:
    ```bash
    cd hermes
    ```
3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Obtain an API key from OpenAI at `https://beta.openai.com/signup/`.

5. Set the `OPENAI_API_KEY` environment variable to your API key. 

    On Unix systems, you can do this with the `export` command:
    ```bash
    export OPENAI_API_KEY='your-api-key'
    ```
    On Windows, you can use the `set` command:
    ```cmd
    set OPENAI_API_KEY='your-api-key'
    ```
### Usage

You can interact with Hermes in two ways:

1. **Console Application**

    Run `chat.py` to talk with the predefined AI:
    ```bash
    python chat.py
    ```

2. **Web Server**

    You can also run a Flask web server to use Hermes through a web interface. 

    The easiest way to do this is to run the start script:

    On Linux:
    ```bash
    ./start.sh
    ```
    On Windows:
    ```cmd
    start.bat
    ```
## License

This project is licensed under the MIT License.- see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for the amazing GPT-4 model
