/* 

what is docker?
docker is a tool that allows you to run applications in an isolated environment.
it's like having your own virtual machine, but without the overhead 
of managing it yourself and with less configuration required
(since everything runs inside containers).

namespaces:
    a)file system (mount)
    b)UNIX time sharing
    c)process identifier (pid)
    d)network
    e)ipc
    f)user identifiers

Container Image:
a read-only template for creating Docker container instances.
images are built from Dockerfile files which contain instructions on 
how they should be configured at runtime
and what software will be installed into them when running their 
image as a container instance.
ie: ubuntu, postgres...

Registry Server:
a server where images can be stored and shared between users or teams of developers.
Docker Hub is one such registry service provided by Docker Inc.

Container:
an image instance created using its associated Container Image file during build process.

Container Engine:
the component responsible for building, running, distributing, networking, etc.,
containers. It also provides tools for operating these containers.

Popular Commands:
docker help (displays commands)
docker search (look up images, "docker search node@alpine")
docker pull (bring image to my docker, "docker pull ubuntu")
docker images (checks what dockers I have installed)
docker rmi <name> (deletes image)
docker ps (checks which containers I have running)
docker start (starts container from inage, "docker start node")
docker stop (stops container, "docker stop node")
docker rm (to delete container)

///////////
check Node dock library
///////////

*/