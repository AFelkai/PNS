# CSUN SAPS DEV

CSUN SAPS Repository for the application source code

# Build & Run image
1. Run `docker build -t korken/saps-app .`  
(korken is the name of my personal account, replace it with your username.)
2. It will take some time to install the dependencies, be patient.
3. Once done, run `docker images` and you will see your newly created image there.
4.  Run `docker run -p 49160:8080 -d korken/saps-app` which will map port 8080 inside of the container to port 49160 your machine.
5. Run `curl -i localhost:49160` or visit http://localhost:49160/