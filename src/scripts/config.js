const Config={
    ROSBRIDGE_SERVER_IP: "192.168.0.35",
    ROSBRIDGE_SERVER_PORT: "9090",
    RECONNECTION_TIMER: 3000,
    CMD_VEL_TOPIC: "/cmd_vel",
    POSE_TOPIC: "/amcl_pose",
    ODOM_TOPIC: "/odom",
    ROBOT_LINEAR_SPEED_SCALE: 150,
    ROBOT_ANGULAR_SPEED_SCALE: 100,
};

export default Config;