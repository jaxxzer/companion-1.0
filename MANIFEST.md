This document describes the ideas and objectives behind this project.

Installation and update process:
  - Easy, fast, simple update/downgrade process.
    - This is done via Docker images and deltas.
  - Easy, portable and fast installation.
    - Also done via Docker installation and minimal system configuration and setup.
  - Minimal development setup.
    - Mostly services run as python programs, each with a setup.py file.
    - Services that need high performance and stability uses static linked binaries in C++ or Rust.
      - The video service is the only one that needs dynamic dependencies, such as gstreamer.

Architecture:
  - The basic service (minimal bundle) runs in a docker that provides basic functionality.
  - Functionalities are exposed via well defined REST API interface.
    - Well defined and projected APIs. Documented and exposed in a friendly way for the user, as the swagger documention.
    - All REST APIs should be versioned to allow detection of API breaks.
  - Any external service can run with minimal dependencies, using only REST API calls or normal UDP mavlink bridge.
  - Video can be provided by two means, RTSP streams with multiple clients or source and UDP streams, both with H264 encode.
  
Basic Services:
  - mavlink2rest: MAVLink to REST API.
  - mavlink-camera-manager: Camera manager bridge for Ground Control stations.
  - network-manager: Wifi connection service.
