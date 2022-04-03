# Elaros Long-COVID Tracker

> The Elaros Long-COVID tracker is a mobile app designed to allow individuals anywhere in the world monitor their own long-COVID symptoms as well as manage their own self-help.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- The Elaros Long-COVID tracker was created by 4 university students studying at Sheffield Hallam University in association with ELAROS 24/7 LTD (their website can be found here: https://www.elaros.com/).
- Many people worldwide are suffering from Long-COVID and lack the ability to access meaningful self-help and resources to aid their recovery. This applicaiton acts as a proof of concept to show that a global, app based approach to providing aid to Long-COVID sufferers is possible.
- This application aims to allow individuals anywhere, who may not be medically educated, a means to better understand their long-COVID symptoms. Furthermore, it provides tools to assist an individuals self-help and tracking of symptoms so that they can be better assessed by medical professionals.

## Technologies Used

- Node.js v16.13.2
- Android Studio 2021.1.1.21 (optional, for Android Emulation)

## Features
The Elaros Long-Covid app has three main feature, each of which is detailed below:

- Goal Tracker; this allows users to set, edit and update their symptom recovery goals such as their breathing in a simple and intuitive way.
- Symptom Graphs; this allows users to see their symptoms and how they have improved or regressed over a period of time, visualised in a simple graphical form.
- Daily Logs; this allows users to update a personal diary day by day which further promotes the idea of self-help and regulation.

## Screenshots

![Screenshot_2022-04-02-17-30-51-92_f73b71075b1de7323614b647fe394240](https://user-images.githubusercontent.com/72026233/161430807-2b2a7cf4-be89-47e7-86e6-1944f4190a84.jpg)
![Screenshot_2022-04-02-17-28-06-24_f73b71075b1de7323614b647fe394240](https://user-images.githubusercontent.com/72026233/161430817-2372dd79-b6f5-42c8-a924-7fe51e8219c2.jpg)
![Screenshot_2022-04-02-17-28-44-80_f73b71075b1de7323614b647fe394240](https://user-images.githubusercontent.com/72026233/161430819-9ab7e0c2-4075-4576-9795-725893924319.jpg)
![Screenshot_2022-04-02-17-27-36-20_f73b71075b1de7323614b647fe394240](https://user-images.githubusercontent.com/72026233/161430821-62686aeb-ba9c-445f-a5e7-a3304a9c3e0a.jpg)
![Screenshot_2022-04-02-17-31-50-93_f73b71075b1de7323614b647fe394240](https://user-images.githubusercontent.com/72026233/161430828-6cad5c87-a9bd-42b0-ad2d-8ef74ed0fe3b.jpg)

## Installation

To set up the enviroment for this project, first install Node.js (v16.13.2) to your machine. 

Install the required dependancies locally using `npm`, the Node Package Manager, run the following command in the directory containing the source code:

```bash
$ cd ../repoLocation
$ npm install
```

Start the expo client, that will allow for the application to be ported to iOS or Android phones in the directory containing the source dode using the command line and running:

```bash
$ npm start
```

Note: You may wish to run the mobile application locally on your machine, to do this Android Studio emulation of any android device will allow the app to be run. To do this install Android Studio and create a virtual phone. Then, after running the expo client (whilst the android emulator is running), pressing "a" into the terminal will port the application into the emulator and allow it to be run.

## Project Status

Project is: _completed_

## Acknowledgements

- This project was conceived by individuals at Elaros in association with Sheffield Hallam University.
- Developed by George I B Hulbert, Isaac Bowyer, Dominik Backhouse and Richard William Atkinson.

## Contact

- George I B Hulbert: <georgeibhulbert@icloud.com>
- Isaac Bowyer: <c00007135@my.shu.ac.uk>
- Dominik Backhouse: <b9019847@my.shu.ac.uk>
- Richard William Atkinson <richardatkinson10000@gmail.com>

## License & Copyright

© George I B Hulbert


Licensed under the [MIT License](LICENSE).
