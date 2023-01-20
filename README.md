# Real-Time Location Search and Navigation Experience
A simple project that utilizes Google Maps API and Material-UI to search and display location markers on a map.

## Getting Started
To get started, clone the repository and run the following commands:

```
npm install
npm start
```
Prerequisites
You will need to have the following installed on your machine:

- Node.js
- npm
  
Project Structure
The project is structured as follows:

- App.tsx: The main entry point of the application, where the main components are rendered.
- actions/: Contains all the action creators used by the application.
- component/: Contains all the reusable components used by the application.
- container/: Contains all the containers used by the application.
- epics/: Contains all the epics used by the application.
interface/: Contains all the interfaces used by the application.
- page/: Contains all the pages used by the application.
reducers/: Contains all the reducers used by the application.
- utils/: Contains all the utility functions used by the application.

## Running the Tests
To run the tests, simply run the following command:

```
npm test
```
Built With
- React
- Material-UI
- Google Maps API
- Redux
- RxJS

## Docker
To run this application with Docker, you can use the provided Dockerfile to build an image of the application.

First, you will need to have Docker installed on your machine. Once you have Docker set up, navigate to the root of your project in the terminal.

To build the image, run the following command:

```
docker build -t <image-name> .
```
This will create an image of the application with the tag <image-name>.

To run the image, use the command:
```
docker run -p 3000:3000 <image-name>
```

This will start a container with the application running on port 3000, which you can access on your host machine at http://localhost:3000.

You can also run the application in detached mode using -d flag

```
docker run -p 3000:3000 -d <image-name>
```
You can check the container logs using docker logs <container_id>

You can stop the container using docker stop <container_id>

You can remove the container using docker rm <container_id>

You can remove the image using docker rmi <image_id>

You can find all running container using docker ps

You can find all container using docker ps -a

You can find all images using docker images

## Author
Mohamad Dzul Syakimin

## License
This project is licensed under the MIT License.

## Acknowledgements
- Google Maps API documentation
- Material-UI documentation
- React documentation
- Redux documentation
- RxJS documentation