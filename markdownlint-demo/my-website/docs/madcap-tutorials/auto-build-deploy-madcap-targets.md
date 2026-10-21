# How to Automatically Build and Deploy MadCap Flare Targets 

This guide outlines how to automatically build MadCap Flare outputs using the command line. MadCap Flare is a popular tool for managing documentation. You can use the following functionality to automate your documentation deployment process using MadCap Flare and scripting. 

## Process Overview 

1. Create a batch script that builds MadCap Flare outputs using the command line.
2. Add a line to the batch script to upload the generated output files to a remote server. 
3. Create a Windows Task in Task Scheduler that runs the above batch script regularly. 

## Build a MadCap Flare Target with Command Line

MadCap Flare targets allow you to define the format for a project’s output. For example, you can define separate targets to output your project into PDF and Word. 

To build a MadCap target using the command line do the following:

1. Open a command prompt. 
2. Navigate to the directory where Flare is installed.

    - The default install location for MadCap Flare is: **C:\Program Files\MadCap Software\MadCap Flare [version number]\Flare.app**

3. Enter a command in the following format: 

    - **madbuild -project [your project path] -target [your target name]**
    - Example: **madbuild -project c:\myFolder\myProject.flprj -target HTML5**
        - **Note:** If a folder name contains a space, the whole project path must be enclosed in quotation marks. For example: **“c:\my Folder\myProject.flprj”**

Add the following commands to a script to complete the above steps: 

```
cd [Your MadCap Flare Installation Directory]
madbuild -project [Your Project Path] -target [Your Target Name]
```

The above script will automatically change to your MadCap Flare directory and build the designated targets each time it runs.  

## Use Curl to Upload a File to a Remote Server

Whether you’re using Windows or Linux, you can use Curl to upload the generated MadCap Flare output files to a remote server for deployment. After installing Curl, you can use the following command to upload a file to a remote server: 

```
curl -T madCapOutputFile -u user:password ftp://ftp.example.com/
```

Add the above line of code to your script file below the lines of code that builds your MadCap Flare output. 

See the following page for more information on using Curl: [Curl Tutorial](https://curl.se/docs/tutorial.html).

## Sample Batch Script

Below is a sample batch script that builds the output of two targets from separate MadCap Flare projects and uploads them to a remote server:

Creating a Job in Windows Task Scheduler
To run the above batch script on a set interval: 

1. In Windows Task Scheduler, select **Create a Basic Task**. 
2. Determine the interval you want to the task to run. 
3. On the Action page select Start a Program.
4. Browse to the location of your batch script and complete the wizard. 
