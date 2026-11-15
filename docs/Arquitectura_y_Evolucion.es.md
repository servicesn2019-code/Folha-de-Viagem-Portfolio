[Português](Arquitetura_e_Evolucao.md) | [English](Architecture_and_Evolution.en.md) | [Español](Arquitectura_y_Evolucion.es.md)

# Arquitectura y evolución

## Base existente

El proyecto interno contiene una aplicación Next.js con App Router y TypeScript. La página inicial incluye un formulario visual. La documentación reúne requisitos, estudios de datos y orientaciones de desarrollo.

## Flujo previsto

Interfaz → validación en el servidor/API → autorización → persistencia en la base de datos → respuesta a la interfaz.

Este flujo es una propuesta de evolución. El prototipo público simula los flujos de interfaz sin implementar el backend previsto.

## Decisiones por confirmar

- Base de datos y herramienta de acceso para la primera entrega.
- Entidades y reglas del primer flujo completo.
- Estrategia de autenticación, sesiones y permisos.
- Tratamiento de errores, pruebas y criterios de aceptación.
- Alojamiento y configuración de la futura demostración.

## Criterio para actualizar la presentación

Cada funcionalidad pasará de planificada a implementada cuando exista código ejecutable y se haya validado su comportamiento. Las capturas y demostraciones deberán corresponder a la versión descrita.
