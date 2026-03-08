# Face Recognition Attendance System using Raspberry Pi

This project implements a **real-time face recognition based attendance system** using **Python, OpenCV, and the face_recognition library**.  
The system captures images of users, trains a face recognition model, and identifies individuals in real time using a webcam.  

A **Flask-based web interface** is used to control the system, allowing users to capture images, train the model, run the recognition system, and view attendance logs.

---

# Project Overview

The system automates attendance tracking by identifying individuals through facial recognition.  
It consists of the following main stages:

1. **Image Capture** – Collect face images of individuals.
2. **Model Training** – Generate facial encodings from captured images.
3. **Real-time Recognition** – Detect and identify faces from webcam feed.
4. **Attendance Logging** – Store attendance records.
5. **Web Interface** – Control the system through a browser.

---

# System Architecture
      
        Webcam
          |
          v
  Image Capture Script
│
▼
Dataset
│
▼
Training Script
│
▼
Face Encodings File
│
▼
Real-time Recognition
│
▼
Attendance Logging
│
▼
Flask Web Server
    
---

# Features

- Real-time face detection and recognition
- Automated attendance logging
- Image dataset creation
- Model training using facial encodings
- Flask-based web interface
- Attendance log retrieval through API
- Live webcam recognition with FPS display

---

# Technologies Used

- Python
- OpenCV
- face_recognition library
- Flask
- NumPy
- Pickle
- CSV

---

# Project Modules

## 1. Image Capture (`capture.py`)

This script captures images of a user using a webcam and stores them in a dataset folder.

Features:

- Creates dataset folder automatically
- Saves timestamped images
- Organizes images by user name

---

## 2. Training Script (`train.py`)

This script processes the dataset and generates **facial encodings**.

Steps performed:

1. Load dataset images
2. Detect faces
3. Generate face encodings
4. Save encodings to a file

The trained data is stored in:
encodings.pickle


---

## 3. Real-Time Face Recognition (`run.py`)

This module performs real-time face recognition using webcam input.

Main steps:

1. Capture webcam frames
2. Detect faces in frame
3. Generate face encodings
4. Compare with trained encodings
5. Identify individuals
6. Display results on screen

The system also calculates **frames per second (FPS)** for performance monitoring.

---

## 4. Flask Web Interface (`app.py`)

The Flask server provides a simple interface for interacting with the system.

Available routes:

| Route | Function |
|------|-----------|
| `/` | Home page |
| `/capture/<name>` | Capture images for a new user |
| `/train` | Train the face recognition model |
| `/run` | Start the attendance system |
| `/attendance-log` | View attendance records |

---

