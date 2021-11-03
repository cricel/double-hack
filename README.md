# double-hack

for web version to work,
install: https://nodejs.org/en/
open terminal, go to "react-app" folder
change the server ip for ros in "double-hack/react-app/src/scripts/config.js"
do 'npm-install"
do "npm start" to start the web app

for robot side:
open terminal, go to "ros_ws" folder
do "catkin_make"
do "roslaunch double_general double_core.launch" to boot up the robot,
