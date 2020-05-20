# Component manifest

This page describes the manifest definition for components used in Companion software.
Every single component should have a manifest description file to specify basic information about its integration and capabilities. This file should also be stored as manifest.toml in your project directory to help the integration with software development platforms (GitHub, GitLab, GitBucker and etc).

```toml
# Basic information about the component
name = "Network" # The name should be unique between all others components
description = "Deals with the network configuration, both wifi and ethernet."
author = "Jane Doe"
group = [ # List of all valid groups, it is necessary to select at least a single group
    "core",    # Core components necessary for the bare minimum functionality
    "network", # Network capabilities, E.g: WIFI, ethernet, connection methods and priorities
    "video",   # Video stream and camera management and features
    "peripheral",  # Deals with any device external from the vehicle, E.g: Sonar, manipulators
    "system",  # Expose functionalities of the main computer system
    "vehicle", # Components that works around vehicle, E.g: Mavlink, Pixhawk
    "helper",  # Any service that does not fit in the previous groups
]

# Docker information of the component, this will be used to run and register the service to run
[docker]
registry = "dockerhub" # that's the default value
image = "janedoe/fancycomponent"

[docker.compose]
# Configuration should follow the [docker compose specification](https://docs.docker.com/compose/compose-file/)
configuration = '''
version: "3.8"
services:
  redis:
    image: redis:latest
    deploy:
      replicas: 1
    configs:
      - my_config
      - my_other_config
configs:
  my_config:
    file: ./my_config.txt
  my_other_config:
    external: true
'''