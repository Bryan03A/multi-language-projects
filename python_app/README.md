# Open a Python Flask application project downloaded from GitHub in Visual Studio Code

## 1. Download the project from GitHub
Follow one of the methods mentioned above:
- **Clone with Git**: Use `git clone https://github.com/Bryan03A/multi-language-projects.git` to copy the project to your computer.
- **Download ZIP**: Go to the repository on GitHub and select **Download ZIP**. Then, unzip the file.

## 2. Open the project in Visual Studio Code
1. Open Visual Studio Code.
2. Select **File > Open Folder** and navigate to the Flask project folder.
3. Click **Open** to open the folder.

## 3. Create a virtual environment in Python
To manage the application dependencies without affecting your global Python installation, it's recommended to create a virtual environment.

1. Open a terminal in Visual Studio Code.
2. Run the following command to create a virtual environment inside the project folder:

   ```python
    python -m venv venv
    ```

3. Activate the virtual environment:

   - On Windows: ```python
    .\venv\Scripts\activate
    ```
   - On MacOS/Linux: ```python
    source venv/bin/activate
    ```

## 4. Install Flask dependencies from `requirements.txt`
1. With the virtual environment activated, install the dependencies specified in the `requirements.txt` file. Make sure you are in the project folder where this file is located.
2. Run the following command:

   ```python
    pip install -r requirements.txt
    ```

This will install Flask and any other dependencies specified in the `requirements.txt` file.

## 5. Run the Flask application
With the dependencies installed and the virtual environment activated, you can run the Flask application.

1. Run the following command to start the Flask application:

   ```python
    python app.py
    ```

2. The application should be available at `http://127.0.0.1:5001`.
