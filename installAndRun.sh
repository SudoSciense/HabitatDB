#!/bin/bash


cd react_backend/
npm install
npm run start &
cd ../
npm install
npm run start_frontend
