# Open a Node.js project downloaded from GitHub in Visual Studio Code

## 1. Download the project from GitHub
Follow one of the methods mentioned above:
- **Clone with Git**: Use `git clone https://github.com/Bryan03A/multi-language-projects.git` to copy the project to your computer.
- **Download ZIP**: Go to the repository on GitHub and select **Download ZIP**. Then, unzip the file.

## 2. Consideration for using a JavaScript-specific IDE
If you use a JavaScript or Node.js-specific IDE like WebStorm, the process will be simple, and you will be able to run the project without additional configuration.

However, when using an editor like Visual Studio Code, which is not specifically designed for Node.js, you will need to follow a few additional steps to configure and run the project.

## 3. Open the project in Visual Studio Code
1. Open Visual Studio Code.
2. Select **File > Open Folder** and navigate to the Node.js project folder.
3. Click **Open** to open the folder.

## 4. Configure Visual Studio Code for Node.js
To work with Node.js in Visual Studio Code, you need to install the Node.js extension:

1. Go to the **Extensions View** in Visual Studio Code (the cube icon on the left or use `Ctrl+Shift+X`).
2. Search for and install the **Node.js** extension (by Microsoft) or **JavaScript (ES6) code snippets** to get helpful autocompletion features and other benefits.

## 5. Install dependencies with `npm`
The project already has the `package.json` and `package-lock.json` files created, which contain the necessary dependencies.

1. Open the integrated terminal in Visual Studio Code (`Ctrl+` or from **Terminal > New Terminal**).
2. In the terminal, navigate to the project folder if you're not already there.
3. Run the following command to install the dependencies listed in `package.json`:

   ```java
    npm install
    ```

This will install all the necessary dependencies for the project to work correctly.

## 6. Run the Node.js project
With the dependencies installed, you can run the Node.js project.

1. Look in the `package.json` file for the start script. It is usually found under the `"scripts"` section as `"start"`

2. Run the following command in the integrated terminal of Visual Studio Code:

    ```java
    npm start
    ```

The Node.js application should now be running on the specified port at http://localhost:5002.