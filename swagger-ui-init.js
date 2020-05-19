
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "Companion",
      "version": "1.0.0"
    },
    "paths": {
      "openapi": {
        "0": "3",
        "1": ".",
        "2": "0",
        "3": ".",
        "4": "0"
      },
      "info": {
        "description": "This is the API for the ArduSub Companion.",
        "version": "1.0.0",
        "title": "Swagger Companion",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
          "email": "apiteam@swagger.io"
        },
        "license": {
          "name": "Apache 2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
      },
      "servers": {
        "0": {
          "url": "https://companion.swagger.io/v2"
        },
        "1": {
          "url": "http://companion.swagger.io/v2"
        }
      },
      "/camera/configuration": {
        "post": {
          "tags": [
            "camera"
          ],
          "summary": "Set a new GStreamer pipeline to use for a specific camera",
          "description": "Set a new GStreamer pipeline to use. It should start with a 'h264parse' element.",
          "operationId": "writePipeline",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "schema": {
                        "$ref": "#/components/schemas/cameraPipeline"
                      }
                    }
                  },
                  "example": {
                    "/dev/video0": "cameraPipeline"
                  }
                }
              }
            },
            "500": {
              "description": "Error writing pipeline"
            }
          }
        },
        "get": {
          "tags": [
            "camera"
          ],
          "summary": "Get all gstreamer pipelines",
          "operationId": "readPipelines",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "schema": {
                        "$ref": "#/components/schemas/cameraPipeline"
                      }
                    }
                  },
                  "example": {
                    "/dev/video0": "cameraPipeline"
                  }
                }
              }
            },
            "500": {
              "description": "Error writing pipeline"
            }
          }
        }
      },
      "/camera/getV4L2cameras": {
        "get": {
          "tags": [
            "camera"
          ],
          "summary": "Get a List of available cameras via the V4L2 interface",
          "description": "Get the GStreamer pipeline currently in use",
          "operationId": "readV4L2Cameras",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "TO-DO"
                  }
                }
              }
            },
            "500": {
              "description": "Error getting cameras list"
            }
          }
        }
      },
      "/camera/profiles": {
        "get": {
          "tags": [
            "camera"
          ],
          "summary": "Get a List of available cameras via the V4L2 interface",
          "description": "Get the GStreamer pipeline currently in use",
          "operationId": "readV4L2profiles",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "TO-DO"
                  }
                }
              }
            },
            "500": {
              "description": "Error reading profiles"
            }
          }
        }
      },
      "/camera/V4l2Control": {
        "get": {
          "tags": [
            "camera"
          ],
          "summary": "Get a List of available V4L2 Controls for the current camera",
          "description": "Get the GStreamer pipeline currently in use",
          "operationId": "readV4L2controls",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "TO-DO"
                  }
                }
              }
            },
            "500": {
              "description": "Error reading v4l2 controls"
            }
          }
        },
        "post": {
          "tags": [
            "camera"
          ],
          "summary": "Get a List of available cameras via the V4L2 interface",
          "description": "Get the GStreamer pipeline currently in use",
          "operationId": "setV4L2Controls",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "value"
                  ],
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "value": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            "description": "The network to connect to."
          },
          "responses": {
            "200": {
              "description": "successful operation"
            },
            "500": {
              "description": "Error setting control"
            }
          }
        }
      },
      "/mavproxy": {
        "get": {
          "tags": [
            "mavproxy"
          ],
          "summary": "Get the current MAVProxy start settings",
          "description": "Get the current MAVProxy start settings",
          "operationId": "readMavproxy",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "--master=/dev/autopilot,115200\n--load-module='GPSInput,DepthOutput'\n--source-system=200\n--cmd=\"set heartbeat 0\"\n--out udpin:localhost:9000\n--out udpout:localhost:9002\n--out udpin:0.0.0.0:14660\n--out udpbcast:192.168.2.255:14550\n--mav20\n--aircraft telemetry\n--streamrate 20\n"
                  }
                }
              }
            },
            "500": {
              "description": "Error reading arguments file"
            }
          }
        },
        "post": {
          "tags": [
            "mavproxy"
          ],
          "summary": "Write new MAVProxy start command-line arguments",
          "description": "Write new MAVProxy start command-line arguments",
          "operationId": "writeMavproxy",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "string",
                  "example": "--master=/dev/autopilot,115200\n--load-module='GPSInput,DepthOutput'\n--source-system=200\n--cmd=\"set heartbeat 0\"\n--out udpin:localhost:9000\n--out udpout:localhost:9002\n--out udpin:0.0.0.0:14660\n--out udpbcast:192.168.2.255:14550\n--mav20\n--aircraft telemetry\n--streamrate 20\n"
                }
              }
            },
            "description": "The new command-line arguments."
          },
          "responses": {
            "200": {
              "description": "successful operation"
            },
            "500": {
              "description": "Error launching with new parameters"
            }
          }
        }
      },
      "/network/scanWifi": {
        "get": {
          "tags": [
            "network"
          ],
          "summary": "Read Companion system detected devices",
          "description": "Read CPU, Disk and RAM status of the companion computer",
          "operationId": "scanWifi",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "items": {
                      "type": "array",
                      "items": {}
                    },
                    "example": [
                      "wifi 1",
                      "wifi 2",
                      "wifi 3"
                    ]
                  }
                }
              }
            },
            "500": {
              "description": "Error reading system services"
            }
          }
        }
      },
      "/network/connectWifi": {
        "post": {
          "tags": [
            "network"
          ],
          "summary": "Connect to a Wi-Fi network",
          "description": "Connect to the chosen Wi-Fi network",
          "operationId": "connectWifi",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "ssid",
                    "password"
                  ],
                  "properties": {
                    "ssid": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            "description": "The network to connect to."
          },
          "responses": {
            "200": {
              "description": "successful operation"
            },
            "500": {
              "description": "Error connecting"
            }
          }
        }
      },
      "/network/status": {
        "get": {
          "tags": [
            "network"
          ],
          "summary": "Read Network status",
          "description": "Read current wifi state and internet accessibility",
          "operationId": "wifiStatus",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "internet": {
                        "type": "boolean"
                      },
                      "ssid": {
                        "type": "string",
                        "example": "Home WiFi"
                      }
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Error reading network status"
            }
          }
        }
      },
      "/pixhawk/flash/stable": {
        "post": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Upload latest stable firmware to Pixhawk",
          "description": "Read version of companion or git hash if current commit is not tagged",
          "operationId": "flashStable",
          "responses": {
            "202": {
              "description": "Flashing started"
            },
            "500": {
              "description": "Unable to start flashing"
            }
          }
        }
      },
      "/pixhawk/flash/beta": {
        "post": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Upload latest beta firmware to Pixhawk",
          "operationId": "flashBeta",
          "responses": {
            "202": {
              "description": "Flashing started"
            },
            "500": {
              "description": "Unable to start flashing"
            }
          }
        }
      },
      "/pixhawk/flash/dev": {
        "post": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Upload latest dev firmware to Pixhawk",
          "operationId": "flashDev",
          "responses": {
            "202": {
              "description": "Flashing started"
            },
            "500": {
              "description": "Unable to start flashing"
            }
          }
        }
      },
      "/pixhawk/flash/custom": {
        "post": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Upload custom firmware to Pixhawk",
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "firmware": {
                      "description": "The firmware file to upload (.apj).",
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Flashing started"
            },
            "500": {
              "description": "Unable to start flashing"
            }
          }
        }
      },
      "/pixhawk/flash/status": {
        "get": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Read current firmware flashing output",
          "description": "Returns the console output of the flashing process as a string",
          "operationId": "flashStatus",
          "responses": {
            "200": {
              "description": "Flashing started",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Downloading latest ArduSub firmware from http://firmware.ardupilot.org/Sub/latest/fmuv2/ardusub.apj\nStopping mavproxy\nFlashing Pixhawk...\n"
                  }
                }
              }
            }
          }
        }
      },
      "/pixhawk/reboot": {
        "post": {
          "tags": [
            "pixhawk"
          ],
          "summary": "Read current firmware flashing output",
          "description": "Returns the console output of the flashing process as a string",
          "operationId": "pixhawkReboot",
          "responses": {
            "200": {
              "description": "Command sent"
            }
          }
        }
      },
      "/routing/endpoints": {
        "get": {
          "tags": [
            "routing"
          ],
          "summary": "Show all available communication endpoints",
          "operationId": "readEnpoints",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "anyOf": [
                        {
                          "$ref": "#/components/schemas/networkEndpoint"
                        },
                        {
                          "$ref": "#/components/schemas/serialEndpoint"
                        }
                      ]
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Failed to list the endpoints"
            }
          }
        },
        "post": {
          "tags": [
            "routing"
          ],
          "summary": "Create new endpoint.",
          "operationId": "newEndpoint",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/networkEndpoint"
                    },
                    {
                      "$ref": "#/components/schemas/serialEndpoint"
                    }
                  ],
                  "$ref": "#/components/schemas/endpoint"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Endpoint created",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/networkEndpoint"
                        },
                        {
                          "$ref": "#/components/schemas/serialEndpoint"
                        }
                      ]
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Failed to create endpoint"
            }
          }
        },
        "delete": {
          "tags": [
            "routing"
          ],
          "summary": "Delete an Endpoint",
          "operationId": "deleteEndpoint",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "endpointId": {
                      "type": "integer",
                      "example": 0
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Endpoint deleted successfully"
            },
            "500": {
              "description": "Failed to delete endpoint",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "Error: Endpoint is still linked"
                  }
                }
              }
            }
          }
        }
      },
      "/routing/links": {
        "get": {
          "tags": [
            "routing"
          ],
          "summary": "Show all existent endpoint links",
          "operationId": "readLinks",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/link"
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Failed to list links"
            }
          }
        },
        "post": {
          "tags": [
            "routing"
          ],
          "summary": "Create new link",
          "operationId": "newLink",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/link"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Link created successfully"
            },
            "500": {
              "description": "Error while creating link"
            }
          }
        },
        "delete": {
          "tags": [
            "routing"
          ],
          "summary": "Delete a link",
          "operationId": "deleteLink",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "linkId": {
                      "type": "integer",
                      "example": 0
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Link deleted successfully"
            },
            "500": {
              "description": "Failed to delete link",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "Failed to delete link (reason here)"
                  }
                }
              }
            }
          }
        }
      },
      "/settings/status": {
        "get": {
          "tags": [
            "settings"
          ],
          "summary": "Get status of settings service",
          "operationId": "readStatus",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/settings_status"
                  }
                }
              }
            },
            "500": {
              "description": "Failed to provide status of settings service"
            }
          }
        }
      },
      "/settings/{settings_name}": {
        "get": {
          "tags": [
            "settings"
          ],
          "summary": "Get settings from a specific group.",
          "operationId": "getSettingsByName",
          "parameters": [
            {
              "name": "settings_name",
              "in": "path",
              "description": "Settings group name.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/settings_json"
                  }
                }
              }
            }
          }
        }
      },
      "/system/status": {
        "get": {
          "tags": [
            "system"
          ],
          "summary": "Read Companion system status",
          "description": "Read CPU, Disk and RAM status of the companion computer",
          "operationId": "readStatus",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/status"
                  }
                }
              }
            },
            "500": {
              "description": "Error reading system data"
            }
          }
        }
      },
      "/system/services": {
        "get": {
          "tags": [
            "system"
          ],
          "summary": "Read Companion system running services",
          "description": "Provides a status list of running services",
          "operationId": "readServices",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/service"
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Error reading system services"
            }
          }
        }
      },
      "/system/devices": {
        "get": {
          "tags": [
            "system"
          ],
          "summary": "Read Companion system detected devices",
          "description": "Provides a list of devices that are connected and detected by the operating system",
          "operationId": "readDevices",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/devicelist"
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Error reading system services"
            }
          }
        }
      },
      "/system/version": {
        "get": {
          "tags": [
            "system"
          ],
          "summary": "Read Companion system version",
          "description": "Read version of companion or git hash if current commit is not tagged",
          "operationId": "readVersion",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/version"
                  }
                }
              }
            },
            "500": {
              "description": "Error reading system version"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "cameraPipeline": {
          "type": "object",
          "properties": {
            "rtsp-pipeline": {
              "type": "string",
              "enum": [
                "custom",
                "rtsp"
              ]
            },
            "pipeline": {
              "type": "string",
              "example": "! h264parse\n! queue\n! rtph264pay config-interval=10 pt=96\n! udpsink host=192.168.2.255 port=5600\n"
            }
          }
        },
        "networkEndpoint": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 1,
              "readOnly": true
            },
            "ip": {
              "type": "string",
              "example": "0.0.0.0"
            },
            "port": {
              "type": "integer",
              "example": 12345
            },
            "role": {
              "type": "string",
              "enum": [
                "client",
                "server"
              ]
            },
            "protocol": {
              "type": "string",
              "enum": [
                "udp",
                "tcp"
              ]
            },
            "name": {
              "type": "string",
              "example": "Arduino UDP Relay"
            }
          }
        },
        "serialEndpoint": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 2,
              "readOnly": true
            },
            "devicePath": {
              "type": "string",
              "example": "/dev/ttyUSB0"
            },
            "baudrate": {
              "type": "integer",
              "example": 115200
            },
            "name": {
              "type": "string",
              "example": "Arduino Uno"
            }
          }
        },
        "link": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 0,
              "readOnly": true
            },
            "from_id": {
              "type": "integer",
              "example": 1
            },
            "to_id": {
              "type": "integer",
              "example": 3
            },
            "throughput_in_bps": {
              "type": "number",
              "example": 123.45,
              "readOnly": true
            },
            "throughput_out_bps": {
              "type": "number",
              "example": 123.45,
              "readOnly": true
            }
          }
        },
        "settings_status": {
          "type": "object",
          "properties": {
            "version": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "description": "Service name.",
                  "example": "Settings"
                },
                "version": {
                  "type": "object",
                  "properties": {
                    "major": {
                      "type": "integer",
                      "example": 1
                    },
                    "minor": {
                      "type": "integer",
                      "example": 0
                    },
                    "hash": {
                      "type": "string",
                      "example": "bb1b3a7"
                    }
                  }
                }
              }
            },
            "settings": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Settings name."
                  },
                  "edited": {
                    "type": "boolean",
                    "description": "Check if the settings matches the original settings or not."
                  }
                }
              }
            }
          }
        },
        "settings_json": {
          "type": "object",
          "properties": {
            "header": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "description": "Settings group name."
                },
                "modified": {
                  "type": "boolean",
                  "description": "Inform if the settings were modified."
                },
                "hash": {
                  "type": "string",
                  "description": "Content in sha1 format.",
                  "example": "3e2e95f5ad970eadfa7e17eaf73da97024aa5359"
                },
                "date": {
                  "type": "string",
                  "description": "ISO 8601 / RFC 3339 date & time format.",
                  "example": "2001-07-08T00:34:60.026490+09:30"
                }
              }
            },
            "service": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string",
                  "description": "System path of the .toml files that contain the settings.",
                  "example": "/user/pi/.settings/services/service_name.toml"
                },
                "ip": {
                  "type": "string",
                  "description": "Internet IP address of the running service that uses the settings, empty if it's not a running service."
                },
                "port": {
                  "type": "integer",
                  "description": "Port of the running process.",
                  "example": 8088
                }
              }
            },
            "settings": {
              "type": "object",
              "description": "Settings keys and values."
            }
          }
        },
        "status": {
          "type": "object",
          "properties": {
            "cpuload": {
              "type": "number",
              "example": 5.2,
              "description": "Cpu load in % of all cores"
            },
            "uptime": {
              "type": "string",
              "example": "5 days, 20 hours, 41 minutes"
            },
            "ram": {
              "type": "string",
              "example": "596MB/926MB (64% used)"
            },
            "disk": {
              "type": "string",
              "example": "2.5GB/14.4GB (19% used)"
            },
            "cpustatus": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "event": {
                    "type": "string",
                    "example": "over-voltage",
                    "description": "Event type."
                  },
                  "time": {
                    "type": "string",
                    "example": "2001-07-08T00:34:60.026490+09:30",
                    "description": "ISO 8601 / RFC 3339 date & time format."
                  }
                }
              }
            }
          }
        },
        "service": {
          "type": "object",
          "properties": {
            "event": {
              "type": "string",
              "example": "ping-proxy",
              "description": "Running service."
            },
            "timestamp": {
              "type": "integer",
              "example": 100,
              "description": "Time that the service is running in seconds."
            },
            "cpu": {
              "type": "number",
              "example": 2.5,
              "description": "CPU percentage allocated for this service."
            },
            "ram": {
              "type": "number",
              "example": 0.9,
              "description": "RAM percentage allocated for this service."
            }
          }
        },
        "devicelist": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Human friendly name."
            },
            "capabilities": {
              "type": "array",
              "description": "Device's capability list.",
              "items": {
                "type": "string",
                "description": "Device capability."
              }
            }
          },
          "example": {
            "name": "Raspberry Camera",
            "capabilities": [
              "audio",
              "video"
            ]
          }
        },
        "version": {
          "type": "object",
          "properties": {
            "tag": {
              "type": "string",
              "description": "Base companion release.",
              "example": "0.0.19"
            },
            "commits": {
              "type": "number",
              "description": "Number of commits over the tag, typically zero.",
              "example": 0
            },
            "hash": {
              "type": "string",
              "description": "Hash code of the last commit.",
              "example": "g9aa6f65"
            }
          }
        }
      }
    },
    "tags": [
      {
        "name": "system",
        "description": "System status and diagnostics"
      },
      {
        "name": "pixhawk",
        "description": "Firmware flashing functionalities"
      },
      {
        "name": "network",
        "description": "Networking management"
      },
      {
        "name": "camera",
        "description": "Camera management"
      },
      {
        "name": "mavproxy",
        "description": "mavproxy management"
      },
      {
        "name": "settings",
        "description": "Settings service"
      }
    ]
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
