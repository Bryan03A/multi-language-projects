# Open a Ruby (Sinatra) project downloaded from GitHub in Visual Studio Code

## 1. Download the project from GitHub
Follow one of the methods mentioned above:
- **Clone with Git**: Use `git clone https://github.com/Bryan03A/multi-language-projects.git` to copy the project to your computer.
- **Download ZIP**: Go to the repository on GitHub and select **Download ZIP**. Then, unzip the file.

## 2. Consideration for using a Ruby-specific IDE
If you use a Ruby-specific IDE like RubyMine, the process will be straightforward. These IDEs will automatically recognize the project and allow you to run the application without additional configuration.

However, when using an editor like Visual Studio Code, which is not exclusively dedicated to Ruby, you will need to follow a few extra steps to configure the environment and run the project.

## 3. Open the project in Visual Studio Code
1. Open Visual Studio Code.
2. Select **File > Open Folder** and navigate to the Sinatra project folder.
3. Click **Open** to open the folder.

## 4. Install Ruby and configure Visual Studio Code
Ensure that Ruby is installed on your system. You can verify it by running the following command in the terminal:

1. Open the integrated terminal in Visual Studio Code (`Ctrl+` or from **Terminal > New Terminal**).
2. Check Ruby installation with:

   ```cmd
    ruby -v
    ```

If you don't have Ruby installed, you can download it from [https://www.ruby-lang.org/](https://www.ruby-lang.org/).

Then, install the Ruby extension for Visual Studio Code to enhance your development experience with features like autocompletion and debugging.

1. Go to the **Extensions View** in Visual Studio Code (the cube icon on the left or use `Ctrl+Shift+X`).
2. Search for and install the **Ruby** extension.

## 5. Install the project dependencies with `Gemfile`
The project uses a `Gemfile` to manage its dependencies. Ensure you have **Bundler** installed on your system to handle Ruby gems:

1. If you don't have Bundler, install it by running the following command in the terminal:

   ```ruby
    gem install bundler
    ```

2. With Bundler installed, navigate to the project folder in the terminal and run the following command to install all the gems for the project, including Sinatra dependencies:

   ```java
    bundle install
    ```

## 6. Run the Sinatra application
Once the dependencies are installed, you can run the Sinatra application.

1. Find the main file for your application, usually named `app.rb` or something similar.
2. Run the following command to start the Sinatra server:

   ```java
    ruby app.rb
    ```

3. The application should be available at `http://localhost:5004` or on the port specified in your code.
