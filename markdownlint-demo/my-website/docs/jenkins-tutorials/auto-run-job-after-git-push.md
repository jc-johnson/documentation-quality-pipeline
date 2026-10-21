# How to Automatically Run a Jenkins Build after Pushing Code changes to Git

Jenkins is an open source tool that lets you automatically build, test and deploy software. It helps you leverage the power of continuous integration and delivery. 

This guide will teach you how to trigger a Jenkins build whenever you push changes to your Git repository.

## Install a Local Instance of Jenkins on Windows 

Download the Windows Jenkins installer [here](https://www.jenkins.io/download/#downloading-jenkins). 

See [this page](https://www.jenkins.io/doc/book/installing/) for more information on installing Jenkins on various environments. 

## Trigger a Jenkins Build

There are two ways to automatically trigger a build in Jenkins:
1. **Push notifications** – The version control system notifies Jenkins of each new commit. 
    - **Note:** Push notifications are a more efficient method of running automated builds. With push notifications, a build only runs when there is a relevant change. 
2. **Polling** – Jenkins polls the repository in regular intervals to see if there have been any changes. 

## Configure Push Notifications

To use push notifications in Jenkins, you need to configure both Jenkins and your version control system (e.g. Github, GitLab) so they can communicate with each other. 

**Note:** Each version control system must be configured differently to connect with Jenkins. 

## Process Overview

To configure push notifications in Jenkins follow the following process: 
1. Install a Jenkins plugin based on your version control system.
2. Configure your repository server hostname.
3. Add an access token or credential.
    - **Note:** Jenkins needs to be able to access the **host** of your Git repository, not just the repository itself. Jenkins can not poll repositories hosted on your local machine by default. Also, Jenkins needs the access token of your version control management system user (e.g. Your Gitlab user). 

## Main Process

1. In Jenkins navigate to **System Configuration > Manage Jenkins**.
2. You can allow Jenkins to connect to your repository host depending on your version control management system by doing the following: 
    1. Under Gitlab Web Hook configuring a Webhook to use with Jenkins. 
    2. Under GitHub adding a GitHub server to use with Jenkins. 
**Note:** See the [official Jenkins documentation](https://www.jenkins.io/doc/) for information on connecting Jenkins with other version control systems. 

## Register Jenkins Webhook URL with Your Version Control Provider

If you choose to use a webhook, you'll need to register it with your version control provider (e.g. GitHub, GitLab). The steps to do this for each system is different and you'll need to check the specific documentation on how to do this.  to use with your version control system. 

Gitlab Instructions - https://docs.gitlab.com/integration/jenkins/
GitHub Instructions - https://plugins.jenkins.io/github/

Under URL enter the Jenkins Webhook URL.

## Configure Polling

To configure polling to allow Jenkins run builds at a regular interval:
1. In Jenkins navigate to **Jenkins Job > Configure**. 
2. In your pipeline under **Scan Multibranch Pipeline Triggers** select **Periodically**.
3. Select the interval that Jenkins should poll the changes (e.g. every hour).