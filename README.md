# CSUN SAPS DEV

CSUN SAPS Repository for the application source code

# Build & Run App locally
1. Run `docker build -t saps-app .`  
2. It will take some time to install the dependencies, be patient.
3. Once done, run `docker images` and you will see your newly created image there.
4. Run `docker run -p 3000:8080 -d saps-app` which will map port 8080 inside of the container to port 3000 your machine.
5. Run `curl -i localhost:3000` or visit http://localhost:3000/