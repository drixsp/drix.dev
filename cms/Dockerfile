FROM python:3.8-slim-buster
ENV PYTHONUNBUFFERED=1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt