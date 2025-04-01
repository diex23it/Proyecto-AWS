# Proyecto AWS

Arquitectura serverless para procesar pedidos en línea usando AWS Lambda, API Gateway y DynamoDB.

## 🚀 ¿Qué incluye este proyecto?

- API RESTful con Node.js
  - `POST /orders` → Crear pedido
  - `GET /orders/{id}` → Obtener pedido
- AWS Lambda
- API Gateway HTTP
- DynamoDB
- Infraestructura como código con Terraform
- Script de despliegue automático

## 📁 Estructura del proyecto

```
Proyecto AWS/
├── src/
│   ├── handlers/
│   └── utils/
├── terraform/
├── lambda.zip
├── deploy.sh
├── package.json
└── README.md
```

## ⚙️ Requisitos

- AWS CLI configurado
- Terraform instalado
- Node.js >= 16

## 🧪 Cómo desplegar

```bash
bash deploy.sh
```

## 🧼 Limpieza

```bash
cd terraform
terraform destroy -auto-approve
```

## 🧩 Futuras mejoras

- Validación de datos
- Autenticación JWT
- Tests automatizados
- Integración con SQS
