# Open a Java Spring Boot project downloaded from GitHub in Visual Studio Code

## 1. Download the project from GitHub
Follow one of the methods mentioned above:
- **Clone with Git**: Use `git clone https://github.com/Bryan03A/multi-language-projects.git` to copy the project to your computer.
- **Download ZIP**: Go to the repository on GitHub and select **Download ZIP**. Then, unzip the file.

## 2. Consideration for using a Java-specific IDE
If you're using a Java-specific IDE like IntelliJ IDEA or Eclipse, the process is simpler. These IDEs usually recognize the project automatically and download the Maven dependencies without additional steps. In this case, you just need to run the main class, named `WorldApplication.class`, which contains the `@SpringBootApplication` annotation.

However, when using an editor like Visual Studio Code, which is not exclusively focused on Java, you will need to follow the additional steps below to configure and run the project properly.

## 3. Open the project in Visual Studio Code
1. Open Visual Studio Code.
2. Select **File > Open Folder** and navigate to the Spring Boot project folder.
3. Click **Open** to open the folder.

## 4. Configure Visual Studio Code for Spring Boot projects
To ensure Visual Studio Code handles the Spring Boot project properly, you will need to install specific Java extensions:

1. Go to the **Extensions View** in Visual Studio Code (the cube icon on the left or use `Ctrl+Shift+X`).
2. Install the following recommended extensions:
   - **Extension Pack for Java** (by Microsoft): includes the essential tools for working with Java.
   - **Spring Boot Extension Pack** (by VMware): facilitates development with Spring Boot, including support for configuration and execution.
   
   These extensions will help with navigation, autocompletion, and running the project.

## 5. Import the project as a Maven project
1. When you open the project, Visual Studio Code should automatically detect the `pom.xml` file.
2. If prompted to import the project as a Java project, select **Yes**.
3. This will download the dependencies and set up the project.

## 6. Run the Spring Boot application
1. Once the dependencies are imported, you should see an option to **Run** the application at the top or next to the main file (where the class containing `@SpringBootApplication` is located).
2. Click **Run** or execute the following command in the integrated terminal:

   ```java
    ./mvnw spring-boot:run
    ```
