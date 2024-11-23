

## Next steps
move all URLs into .env
change all endpoints to be compatible with running container
create a network
create facility to create index and reindex the data
re-design the UI after going through CSS and tailwind

# Guide
Set up and start the docker container by this tutorial: https://github.com/elastic/start-local (note the usename, pass, and api key ..these are important)
start the docker container by navigatin to created directory and execyting ./start.sh (stop by ./stop.sh ..follow the above link for more)
Now pull the QueryPulse from this link: https://github.com/Prashu7487/QueryPulse.git
move the data folder in the QueryPulse directory
create an virtual environment inside the backend directory of QueryPulse and install the requirements.txt present in the same dir.
goto backend directory and create an .env file and paste your details (such as API_KEY) there
go back to QueryPulse directory and run index_ES.py file to create and index the documents (data/Questions.csv file needed, see index_ES for modifications if needed)
activate the venv by being in the backend directory
start the fastAPI server uvicorn main:app --reload
navigate back to frontend dir and start the client npm run dev



