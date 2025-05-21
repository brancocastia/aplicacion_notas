#!/bin/bash

echo "🟡 Instalando dependencias backend..."
cd backend
npm install

echo "🟡 Levantando backend..."
npm run dev &
sleep 3

cd ../frontend
echo "🟡 Instalando dependencias frontend..."
npm install

echo "🟢 Levantando frontend..."
npm run dev &
