#!/bin/bash
set -e
echo "📦 Empaquetando funciones Lambda..."
mkdir -p build
cp -r src/* build/
cd build
npm install --only=prod
zip -r ../lambda.zip .
cd ..
rm -rf build

echo "🚀 Desplegando infraestructura con Terraform..."
cd terraform
terraform init
terraform apply -auto-approve

echo "✅ API disponible en:"
terraform output api_endpoint